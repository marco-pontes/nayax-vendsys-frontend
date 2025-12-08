import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { useEffect } from "react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { useMarketLocationsListMock } from "@/features/market/hooks/useMarketLocationsListMock.ts";

type LocationFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  disabled?: boolean;
  name: Path<T>;
};

export const LocationField = <T extends FieldValues>({
  form,
  name,
  disabled = false,
}: LocationFieldProps<T>) => {
  const { marketLocations, fetchMarketLocations } =
    useMarketLocationsListMock();

  useEffect(() => {
    fetchMarketLocations();
  }, [fetchMarketLocations]);

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <>
          <Field data-invalid={fieldState.invalid} orientation="horizontal">
            <FieldLabel htmlFor="form-location" className="w-1/3">
              Location
            </FieldLabel>
            <Select
              value={field.value?.toString()}
              aria-invalid={fieldState.invalid}
              onValueChange={(value) => field.onChange(Number(value))}
              disabled={disabled}
            >
              <SelectTrigger className="w-2/3" id="form-location">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Locations</SelectLabel>
                  {marketLocations &&
                    marketLocations.map((marketLocation) => (
                      <SelectItem value={String(marketLocation.id)}>
                        {marketLocation.name}
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
