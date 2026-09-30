import { z } from "zod";

const optionalUrl = z
  .string()
  .trim()
  .refine((value) => value === "" || z.string().url().safeParse(value).success, {
    message: "Use a valid image URL.",
  })
  .optional()
  .nullable();

export const inventoryItemSchema = z.object({
  name: z.string().trim().min(2).max(100),
  image_url: optionalUrl,
  quantity: z.coerce.number().min(0).max(999999),
  unit: z.string().trim().min(1).max(20),
  storage_location: z.string().trim().min(2).max(100),
  low_stock_threshold: z.coerce.number().min(0).max(999999),
  expires_at: z
    .string()
    .trim()
    .refine((value) => value === "" || /^\d{4}-\d{2}-\d{2}$/.test(value), {
      message: "Use a valid expiry date.",
    })
    .optional()
    .nullable(),
});

export type InventoryItemInput = z.infer<typeof inventoryItemSchema>;
