import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

type ProviderConfigFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
};

export const ProviderConfigField = <T extends FieldValues>({
  form,
  name,
}: ProviderConfigFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <>
          <Field
            data-invalid={fieldState.invalid}
            orientation="horizontal"
            className="grow"
          >
            <FieldLabel htmlFor="form-provider-config" className="w-1/3">
              Provider Config
            </FieldLabel>
            <InputGroup className="w-2/3">
              <InputGroupTextarea
                {...field}
                id="form-provider-config"
                rows={4}
                className="min-h-14 resize-none"
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
  );
};
