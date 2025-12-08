import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import {
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { useAccountsListMock } from "@/features/market/hooks/useAccountsListMock.ts";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Select, SelectContent, SelectGroup } from "@/components/ui/select.tsx";
import { useEffect } from "react";

type AccountFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  disabled?: boolean;
  name: Path<T>;
};

export const AccountField = <T extends FieldValues>({
  form,
  name,
  disabled = false,
}: AccountFieldProps<T>) => {
  const { accounts, fetchAccounts } = useAccountsListMock();
  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <>
          <Field data-invalid={fieldState.invalid} orientation="horizontal">
            <FieldLabel htmlFor="form-account" className="w-1/3">
              Account
            </FieldLabel>
            <Select
              {...field}
              onValueChange={field.onChange}
              aria-invalid={fieldState.invalid}
              disabled={disabled}
            >
              <SelectTrigger className="w-2/3" id="form-account">
                <SelectValue placeholder="Select an account" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Accounts</SelectLabel>
                  {accounts &&
                    accounts.map((account) => (
                      <SelectItem value={account.id}>{account.name}</SelectItem>
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
