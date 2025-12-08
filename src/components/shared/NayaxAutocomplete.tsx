import { type ReactNode, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command.tsx";
import { cn } from "@/lib/utils.ts";

export type AutocompleteOptionsValueType = string | number;
type AutocompleteOptionsType<T extends AutocompleteOptionsValueType> = {
  label: string;
  value: T;
  icon: ReactNode;
}[];
type AutocompleteProps<T extends AutocompleteOptionsValueType> = {
  options: AutocompleteOptionsType<T>;
  onSelect: (v: T | null) => void;
  placeholder?: string;
  id: string;
};
export const NayaxAutocomplete = <T extends AutocompleteOptionsValueType>({
  options,
  onSelect,
  placeholder = "Please Select...",
  id,
}: AutocompleteProps<T>) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<T | null>(null);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-sm justify-between"
          id={id}
        >
          {value !== null
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-sm p-0">
        <Command>
          <CommandInput placeholder="Search option..." className="h-9" />
          <CommandList>
            <CommandEmpty>Not found</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={String(option.value)}
                  value={String(option.value)}
                  onSelect={() => {
                    const newValue =
                      option.value === value ? null : option.value;
                    setValue(newValue);
                    setOpen(false);
                    onSelect?.(newValue);
                  }}
                >
                  {option.icon && option.icon}
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
