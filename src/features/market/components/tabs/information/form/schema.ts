import * as z from "zod";

export const formSchema = z.object({
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
