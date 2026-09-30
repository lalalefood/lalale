import { z } from "zod";

import { measurementUnits } from "@/app/lib/inventory";

export const inventoryItemSchema = z.object({
  name: z.string().trim().min(2).max(100),
  quantity: z.coerce.number().min(0).max(999999),
  measurement_unit: z.enum(measurementUnits),
  unit_quantity: z.coerce.number().positive().max(999999),
});

export type InventoryItemInput = z.infer<typeof inventoryItemSchema>;
