import { z } from "zod";

import { measurementUnits, type MeasurementUnit } from "@/app/lib/inventory";

export type ShoppingListItem = {
  id: string;
  name: string;
  quantity: number;
  measurement_unit: MeasurementUnit;
  unit_quantity: number;
  purchased: boolean;
  inventory_item_id: string | null;
  created_at: string;
  updated_at: string;
};

export const shoppingListItemSchema = z.object({
  name: z.string().trim().min(2).max(100),
  quantity: z.coerce.number().positive().max(999999),
  measurement_unit: z.enum(measurementUnits),
  unit_quantity: z.coerce.number().positive().max(999999),
  inventory_item_id: z.string().uuid().nullable().optional(),
});

export const shoppingListItemUpdateSchema = shoppingListItemSchema.partial().extend({
  purchased: z.boolean().optional(),
});
