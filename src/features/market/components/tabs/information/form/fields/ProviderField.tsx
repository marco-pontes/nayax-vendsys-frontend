import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { useMarketProvidersListMock } from "@/features/market/hooks/useMarketProvidersListMock.ts";
import { useEffect } from "react";

type ProviderFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
};

export const ProviderField = <T extends FieldValues>({
  form,
  name,
}: ProviderFieldProps<T>) => {
  const { marketProviders, fetchMarketProviders } =
    useMarketProvidersListMock();

  useEffect(() => {
    fetchMarketProviders();
  }, [fetchMarketProviders]);

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <>
          <Field data-invalid={fieldState.invalid} orientation="horizontal">
            <FieldLabel htmlFor="form-provider" className="w-1/3">
              Provider
            </FieldLabel>
            <Select
              value={field.value?.toString()}
              onValueChange={(value) => field.onChange(Number(value))}
              aria-invalid={fieldState.invalid}
            >
              <SelectTrigger className="w-2/3" id="form-provider">
                <SelectValue placeholder="Select a provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Providers</SelectLabel>
                  {marketProviders &&
                    marketProviders.map((marketProvider) => (
                      <SelectItem value={String(marketProvider.id)}>
                        {marketProvider.name}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </>
      )}
    />
  );
};
