import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox.tsx";

type ActiveFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
};

export const ActiveField = <T extends FieldValues>({
  form,
  name,
}: ActiveFieldProps<T>) => (
  <Controller
    name={name}
    control={form.control}
    render={({ field, fieldState }) => (
      <>
        <Field data-invalid={fieldState.invalid} orientation="horizontal">
          <FieldLabel htmlFor="form-active" className="w-1/3 flex-none">
            Active
          </FieldLabel>
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
);
