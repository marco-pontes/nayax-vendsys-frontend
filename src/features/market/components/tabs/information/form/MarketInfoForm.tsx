import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FieldGroup } from "@/components/ui/field";
import type { MarketDetails } from "@/types/types.tsx";

import { VDISection } from "@/features/market/components/tabs/information/VDISection.tsx";
import { formSchema } from "@/features/market/components/tabs/information/form/schema.ts";
import { ActiveField } from "@/features/market/components/tabs/information/form/fields/ActiveField.tsx";
import { MarketNumberField } from "@/features/market/components/tabs/information/form/fields/MarketNumberField.tsx";
import { MgmtField } from "@/features/market/components/tabs/information/form/fields/MgmtField.tsx";
import { AccountField } from "@/features/market/components/tabs/information/form/fields/AccountField.tsx";
import { LocationField } from "@/features/market/components/tabs/information/form/fields/LocationField.tsx";
import { ProviderField } from "@/features/market/components/tabs/information/form/fields/ProviderField.tsx";
import { ProviderConfigField } from "@/features/market/components/tabs/information/form/fields/ProviderConfigField.tsx";

interface MarketFormProps {
  market: MarketDetails;
}

export function MarketInfoForm({ market }: MarketFormProps) {
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
    <form
      id="form-market"
      className="flex gap-16"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup className="w-1/2">
        <ActiveField form={form} name="active" />
        <MarketNumberField form={form} name="id" disabled={market.active} />
        <MgmtField form={form} disabled={market.active} name="mgmtNumber" />
        <AccountField form={form} name="account" disabled={market.active} />
        <LocationField form={form} name="location" disabled={market.active} />
        <ProviderField form={form} name="provider" />
      </FieldGroup>
      <FieldGroup className="w-1/2 flex">
        <ProviderConfigField form={form} name="providerConfig" />
        <VDISection market={market} />
      </FieldGroup>
    </form>
  );
}
