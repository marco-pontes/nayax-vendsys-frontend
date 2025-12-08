import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";

type ApplyFeeFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  disabled?: boolean;
  name: Path<T>;
};

export const ApplyFeeField = <T extends FieldValues>({
  form,
  name,
}: ApplyFeeFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <>
          <Field data-invalid={fieldState.invalid} orientation="horizontal">
            <FieldLabel htmlFor="form-apply-fee" className="w-1/3">
              Apply fee to account top-ups
            </FieldLabel>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              id="form-apply-fee"
              aria-invalid={fieldState.invalid}
            />
          </Field>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </>
      )}
    />
  );
};
