import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox.tsx";

type HasPriceTagsFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  disabled?: boolean;
  name: Path<T>;
};

export const HasPriceTagsField = <T extends FieldValues>({
  form,
  name,
}: HasPriceTagsFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <>
          <Field data-invalid={fieldState.invalid} orientation="horizontal">
            <FieldLabel htmlFor="form-has-price-tags" className="w-1/3">
              Has price tags
            </FieldLabel>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              id="form-has-price-tags"
              aria-invalid={fieldState.invalid}
            />
          </Field>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </>
      )}
    />
  );
};
