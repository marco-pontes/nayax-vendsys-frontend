import * as z from "zod";

export const formSchema = z.object({
  creditCardFee: z.number().min(0, "Please enter a valid number"),
  creditCardFeePercentage: z.number().min(0, "Please enter a valid number"),
  applyFee: z.boolean(),
  hasPriceTags: z.boolean(),
});
