"use client";

import * as React from "react";
import { NayaxCombobox } from "@/components/shared/NayaxCombobox.tsx";

export function PageHeader() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <section className="bg-[#262626]">
      <NayaxCombobox
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={setValue}
      />
    </section>
  );
}
