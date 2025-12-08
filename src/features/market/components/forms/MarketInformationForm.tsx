import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import type { MarketDetails } from "@/types/types.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { useAccountsListMock } from "@/features/market/hooks/useAccountsListMock.ts";
import { useMarketLocationsListMock } from "@/features/market/hooks/useMarketLocationsListMock.ts";
import { useMarketProvidersListMock } from "@/features/market/hooks/useMarketProvidersListMock.ts";
import { useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox.tsx";

const formSchema = z.object({
  id: z.number().min(0, "Required"),
  active: z.boolean(),
  mgmtNumber: z.number().min(0, "Required"),
  account: z.string().min(1, "Required"),
  location: z.number().min(1, "Required"),
  provider: z.number().min(1, "Required"),
  providerConfig: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});

interface MarketFormProps {
  market: MarketDetails;
}

export function MarketInformationForm({ market }: MarketFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: market.id,
      active: market.active,
      mgmtNumber: market.mgmtNumber,
      account: market.account.id,
      location: market.location.id,
      provider: market.provider.id,
      providerConfig: market.provider.config,
    },
  });
  console.log(market);

  const { accounts, fetchAccounts } = useAccountsListMock();
  const { marketLocations, fetchMarketLocations } =
    useMarketLocationsListMock();
  const { marketProviders, fetchMarketProviders } =
    useMarketProvidersListMock();

  useEffect(() => {
    fetchAccounts();
    fetchMarketLocations();
    fetchMarketProviders();
  }, [fetchAccounts, fetchMarketLocations, fetchMarketProviders]);

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <form id="form-market" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="active"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                <FieldLabel htmlFor="form-active">Active</FieldLabel>
                {field.value.toString()}
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="form-active"
                  aria-invalid={fieldState.invalid}
                />
              </Field>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </>
          )}
        />
        <Controller
          name="id"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                <FieldLabel htmlFor="form-number">Market Number</FieldLabel>
                <Input
                  value={field.value?.toString()}
                  onChange={(event) =>
                    field.onChange(Number(event.target.value))
                  }
                  type="number"
                  id="form-number"
                  aria-invalid={fieldState.invalid}
                  disabled={market.active}
                />
              </Field>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </>
          )}
        />
        <Controller
          name="mgmtNumber"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                <FieldLabel htmlFor="form-mgmt">Mgmt Number</FieldLabel>
                <Input
                  value={field.value?.toString()}
                  onChange={(event) =>
                    field.onChange(Number(event.target.value))
                  }
                  id="form-mgmt"
                  type="number"
                  aria-invalid={fieldState.invalid}
                  disabled={market.active}
                />
              </Field>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </>
          )}
        />
        <Controller
          name="account"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                <FieldLabel htmlFor="form-account">Account</FieldLabel>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  aria-invalid={fieldState.invalid}
                  disabled={market.active}
                >
                  <SelectTrigger className="w-[180px]" id="form-account">
                    <SelectValue placeholder="Select an account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Accounts</SelectLabel>
                      {accounts &&
                        accounts.map((account) => (
                          <SelectItem value={account.id}>
                            {account.name}
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
        <Controller
          name="location"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                <FieldLabel htmlFor="form-location">Location</FieldLabel>
                <Select
                  value={field.value?.toString()}
                  aria-invalid={fieldState.invalid}
                  onValueChange={(value) => field.onChange(Number(value))}
                  disabled={market.active}
                >
                  <SelectTrigger className="w-[180px]" id="form-location">
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
        <Controller
          name="provider"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                <FieldLabel htmlFor="form-provider">Provider</FieldLabel>
                <Select
                  value={field.value?.toString()}
                  onValueChange={(value) => field.onChange(Number(value))}
                  aria-invalid={fieldState.invalid}
                >
                  <SelectTrigger className="w-[180px]" id="form-provider">
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
        <Controller
          name="providerConfig"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                <FieldLabel htmlFor="form-provider-config">
                  Provider Config
                </FieldLabel>
                <InputGroup>
                  <InputGroupTextarea
                    {...field}
                    id="form-provider-config"
                    rows={6}
                    className="min-h-24 resize-none"
                    aria-invalid={fieldState.invalid}
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupText className="tabular-nums">
                      {field.value.length}/100 characters
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </>
          )}
        />
      </FieldGroup>
    </form>
  );
}
