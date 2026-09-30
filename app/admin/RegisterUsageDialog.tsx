"use client";

import { useState } from "react";
import { LoaderCircle, PackageMinus, X } from "lucide-react";

import type { InventoryItem, MeasurementUnit } from "@/app/lib/inventory";

const unitLabels: Record<MeasurementUnit, string> = {
  unit: "unit",
  ml: "ml",
  l: "L",
  g: "g",
  kg: "kg",
};

export function RegisterUsageDialog({
  items,
  onRecorded,
}: {
  items: InventoryItem[];
  onRecorded: (item: InventoryItem) => void;
}) {
  const availableItems = items
    .filter((item) => item.quantity > 0)
    .sort((a, b) => a.name.localeCompare(b.name));
  const [open, setOpen] = useState(false);
  const [itemId, setItemId] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const selectedItem = availableItems.find((item) => item.id === itemId);
  const numericQuantity = Number(quantity) || 0;
  const usageDisplay = getUsageDisplay(selectedItem?.measurement_unit);
  const availableAmount = selectedItem
    ? selectedItem.quantity * selectedItem.unit_quantity * usageDisplay.factor
    : 0;
  const remainingAmount = availableAmount - numericQuantity;
  const remainingStockUnits = selectedItem
    ? remainingAmount / usageDisplay.factor / selectedItem.unit_quantity
    : 0;

  function showDialog() {
    setItemId(availableItems[0]?.id ?? "");
    setQuantity("1");
    setNote("");
    setError("");
    setOpen(true);
  }

  async function registerUsage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      !selectedItem ||
      numericQuantity <= 0 ||
      numericQuantity > availableAmount
    ) {
      setError(
        "Usage must be greater than zero and no more than the available stock.",
      );
      return;
    }
    setSaving(true);
    setError("");
    const response = await fetch("/api/admin/inventory/usage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inventory_item_id: selectedItem.id,
        quantity: numericQuantity / usageDisplay.factor,
        note,
      }),
    });
    const result = (await response.json()) as {
      item?: InventoryItem;
      error?: string;
    };
    if (!response.ok || !result.item) {
      setError(result.error ?? "Unable to register this usage.");
      setSaving(false);
      return;
    }
    onRecorded(result.item);
    setSaving(false);
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={showDialog}
        disabled={!availableItems.length}
        className="flex h-11 items-center justify-center gap-2 rounded-full border border-[#3B1B02]/18 bg-white px-5 text-[0.68rem] font-bold tracking-[0.13em] text-[#3B1B02] uppercase transition-colors hover:border-[#009A39] hover:text-[#00752C] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <PackageMinus className="size-4" /> Register usage
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm">
          <button
            type="button"
            className="absolute inset-0"
            onClick={() => !saving && setOpen(false)}
            aria-label="Close usage dialog"
          />
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="usage-title"
            className="relative my-6 w-full max-w-lg rounded-[1.8rem] bg-[#F3E8DE] p-5 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.6rem] font-bold tracking-[0.25em] text-[#009A39] uppercase">
                  Stock movement
                </p>
                <h2
                  id="usage-title"
                  className="mt-2 font-[family:var(--font-accent-family)] text-2xl text-[#3B1B02] normal-case"
                >
                  Register item usage
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-[#3B1B02]/10 p-2"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </div>
            <form onSubmit={registerUsage} className="mt-7 space-y-5">
              <Field label="Inventory item">
                <select
                  required
                  value={itemId}
                  onChange={(event) => {
                    setItemId(event.target.value);
                    setQuantity("1");
                    setError("");
                  }}
                  className="admin-input"
                >
                  {availableItems.map((item) => {
                    const display = getUsageDisplay(item.measurement_unit);
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name} —{" "}
                        {number(
                          item.quantity * item.unit_quantity * display.factor,
                        )}{" "}
                        {display.label} available
                      </option>
                    );
                  })}
                </select>
              </Field>
              <Field
                label={`Amount used${selectedItem ? ` (${usageDisplay.label})` : ""}`}
              >
                <input
                  required
                  type="number"
                  min={usageDisplay.step}
                  max={availableAmount}
                  step={usageDisplay.step}
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  className="admin-input"
                />
              </Field>
              {selectedItem ? (
                <div
                  className={`rounded-2xl border p-4 ${remainingAmount < 0 ? "border-[#B42318]/25 bg-[#B42318]/8" : remainingStockUnits <= 1 ? "border-[#B42318]/18 bg-[#B42318]/[0.055]" : "border-[#009A39]/15 bg-[#009A39]/[0.055]"}`}
                >
                  <p className="text-[0.6rem] font-bold tracking-[0.16em] text-[#3B1B02]/50 uppercase">
                    Stock after confirmation
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-sm text-[#3B1B02]/48 line-through">
                      {number(availableAmount)} {usageDisplay.label}
                    </span>
                    <span className="font-[family:var(--font-accent-family)] text-3xl text-[#3B1B02]">
                      {number(Math.max(remainingAmount, 0))}
                    </span>
                    <span className="text-xs text-[#3B1B02]/50">
                      {usageDisplay.label} ·{" "}
                      {number(Math.max(remainingStockUnits, 0))} stock units
                    </span>
                  </div>
                </div>
              ) : null}
              <Field label="Note (optional)">
                <input
                  maxLength={250}
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="e.g. Saturday event prep"
                  className="admin-input"
                />
              </Field>
              {error ? (
                <p role="alert" className="text-xs leading-5 text-[#B42318]">
                  {error}
                </p>
              ) : null}
              <div className="flex flex-col-reverse gap-3 border-t border-[#3B1B02]/10 pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-11 rounded-full border border-[#3B1B02]/14 px-6 text-[0.68rem] font-bold tracking-[0.14em] uppercase"
                >
                  Cancel
                </button>
                <button
                  disabled={saving || remainingAmount < 0}
                  type="submit"
                  className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#3B1B02] px-7 text-[0.68rem] font-bold tracking-[0.14em] text-[#F3E8DE] uppercase transition-colors hover:bg-[#009A39] disabled:opacity-50"
                >
                  {saving ? (
                    <LoaderCircle className="size-4 animate-spin" />
                  ) : (
                    <PackageMinus className="size-4 text-[#FECF02]" />
                  )}{" "}
                  Confirm usage
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-[0.65rem] font-bold tracking-[0.14em] text-[#3B1B02]/65 uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}
function number(value: number) {
  return new Intl.NumberFormat("en-GB", { maximumFractionDigits: 3 }).format(
    value,
  );
}
function getUsageDisplay(unit?: MeasurementUnit) {
  if (unit === "kg") return { label: "g", factor: 1000, step: 1 };
  if (unit === "l") return { label: "ml", factor: 1000, step: 1 };
  if (unit === "unit") return { label: "unit", factor: 1, step: 0.5 };
  return { label: unit ? unitLabels[unit] : "unit", factor: 1, step: 1 };
}
