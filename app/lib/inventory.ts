export const inventoryStatuses = ["good", "low_stock", "out_of_stock"] as const;

export const measurementUnits = ["unit", "ml", "l", "g", "kg"] as const;

export type InventoryStatus = (typeof inventoryStatuses)[number];
export type MeasurementUnit = (typeof measurementUnits)[number];

export type InventoryItem = {
  id: string;
  name: string;
  quantity: number;
  measurement_unit: MeasurementUnit;
  unit_quantity: number;
  created_at: string;
  updated_at: string;
  status: InventoryStatus;
};

export function getInventoryStatus(item: Pick<InventoryItem, "quantity">): InventoryStatus {
  if (item.quantity <= 0) return "out_of_stock";
  if (item.quantity <= 1) return "low_stock";
  return "good";
}

export function withInventoryStatus<T extends Omit<InventoryItem, "status">>(item: T) {
  return { ...item, status: getInventoryStatus(item) };
}
