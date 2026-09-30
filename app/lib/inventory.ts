export const inventoryStatuses = ["good", "low_stock", "out_of_stock", "expired"] as const;

export type InventoryStatus = (typeof inventoryStatuses)[number];

export type InventoryItem = {
  id: string;
  name: string;
  image_url: string | null;
  quantity: number;
  unit: string;
  storage_location: string;
  low_stock_threshold: number;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
  status: InventoryStatus;
};

export function getInventoryStatus(
  item: Pick<InventoryItem, "quantity" | "low_stock_threshold" | "expires_at">,
): InventoryStatus {
  if (item.expires_at) {
    const expiry = new Date(`${item.expires_at}T23:59:59`);
    if (expiry.getTime() < Date.now()) return "expired";
  }

  if (item.quantity <= 0) return "out_of_stock";
  if (item.quantity <= item.low_stock_threshold) return "low_stock";
  return "good";
}

export function withInventoryStatus<T extends Omit<InventoryItem, "status">>(item: T) {
  return { ...item, status: getInventoryStatus(item) };
}
