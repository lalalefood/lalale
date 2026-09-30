"use client";

import { useState } from "react";
import { Check, LoaderCircle, Plus, ShoppingBasket, Trash2 } from "lucide-react";

import { measurementUnits, type MeasurementUnit } from "@/app/lib/inventory";
import type { ShoppingListItem } from "@/app/lib/shopping-list";

const units: Record<MeasurementUnit, string> = { unit: "unit", ml: "ml", l: "L", g: "g", kg: "kg" };
const emptyForm = { name: "", quantity: "1", measurement_unit: "unit" as MeasurementUnit, unit_quantity: "1" };

export function ShoppingListDashboard({ initialItems, setupError }: { initialItems: ShoppingListItem[]; setupError?: string }) {
  const [items, setItems] = useState(initialItems);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const pending = items.filter((item) => !item.purchased);
  const purchased = items.filter((item) => item.purchased);

  async function addItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSaving(true); setError("");
    const response = await fetch("/api/admin/shopping-list", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
    });
    const result = (await response.json()) as { item?: ShoppingListItem; error?: string };
    if (!response.ok || !result.item) { setError(result.error ?? "Unable to add this item."); setSaving(false); return; }
    setItems((current) => [result.item!, ...current]); setForm(emptyForm); setSaving(false);
  }

  async function togglePurchased(item: ShoppingListItem) {
    const response = await fetch(`/api/admin/shopping-list/${item.id}`, {
      method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ purchased: !item.purchased }),
    });
    const result = (await response.json()) as { item?: ShoppingListItem };
    if (response.ok && result.item) setItems((current) => current.map((currentItem) => currentItem.id === item.id ? result.item! : currentItem));
  }

  async function deleteItem(item: ShoppingListItem) {
    const response = await fetch(`/api/admin/shopping-list/${item.id}`, { method: "DELETE" });
    if (response.ok) setItems((current) => current.filter((currentItem) => currentItem.id !== item.id));
  }

  return (
    <main className="min-h-screen px-4 pt-19 pb-10 sm:px-7 lg:px-9 lg:pt-8 xl:px-12">
      <header className="border-b border-[#3B1B02]/12 pb-7">
        <p className="text-[0.62rem] font-bold tracking-[0.3em] text-[#009A39] uppercase">Purchasing companion</p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><h1 className="font-[family:var(--font-accent-family)] text-3xl text-[#3B1B02] normal-case sm:text-4xl">Shopping List</h1><p className="mt-2 max-w-xl text-xs leading-5 text-[#3B1B02]/55">Keep zero-stock items in inventory, add what needs replacing here, then update the stock quantity after purchasing.</p></div>
          <div className="flex gap-2"><Summary value={pending.length} label="To buy" /><Summary value={purchased.length} label="Purchased" /></div>
        </div>
      </header>

      {setupError ? <div className="mt-6 rounded-2xl border border-[#FECF02] bg-[#FECF02]/14 p-4 text-xs leading-6 text-[#3B1B02]"><strong className="block">Shopping list database setup required</strong>Run the latest Supabase migration. {setupError}</div> : null}

      <section className="mt-7 grid gap-6 xl:grid-cols-[22rem_1fr]">
        <form onSubmit={addItem} className="h-fit rounded-[1.8rem] border border-[#3B1B02]/8 bg-white p-5 shadow-[0_24px_60px_-44px_rgba(59,27,2,.46)] sm:p-6">
          <p className="text-[0.6rem] font-bold tracking-[0.26em] text-[#009A39] uppercase">New purchase</p>
          <h2 className="mt-1 font-[family:var(--font-accent-family)] text-2xl normal-case">Add to the list</h2>
          <div className="mt-6 space-y-4">
            <Field label="Item name"><input required minLength={2} className="admin-input" placeholder="e.g. Coconut oil" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></Field>
            <div className="grid grid-cols-2 gap-3"><Field label="Quantity"><input required min="0.01" step="0.01" type="number" className="admin-input" value={form.quantity} onChange={(event) => setForm({ ...form, quantity: event.target.value })} /></Field><Field label="Unit size"><input required min="0.001" step="0.001" type="number" className="admin-input" value={form.unit_quantity} onChange={(event) => setForm({ ...form, unit_quantity: event.target.value })} /></Field></div>
            <Field label="Measure"><select className="admin-input" value={form.measurement_unit} onChange={(event) => setForm({ ...form, measurement_unit: event.target.value as MeasurementUnit })}>{measurementUnits.map((unit) => <option key={unit} value={unit}>{units[unit]}</option>)}</select></Field>
          </div>
          {error ? <p className="mt-4 text-xs text-[#B42318]">{error}</p> : null}
          <button disabled={saving} className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#3B1B02] text-[0.68rem] font-bold tracking-[0.15em] text-[#F3E8DE] uppercase transition-colors hover:bg-[#009A39] disabled:opacity-60">{saving ? <LoaderCircle className="size-4 animate-spin" /> : <Plus className="size-4 text-[#FECF02]" />} Add item</button>
        </form>

        <section className="rounded-[1.8rem] border border-[#3B1B02]/8 bg-white p-4 shadow-[0_24px_60px_-44px_rgba(59,27,2,.46)] sm:p-6">
          <div className="flex items-center justify-between"><div><p className="text-[0.6rem] font-bold tracking-[0.26em] text-[#009A39] uppercase">Your list</p><h2 className="mt-1 font-[family:var(--font-accent-family)] text-2xl normal-case">Ready for the shop</h2></div><ShoppingBasket className="size-6 text-[#3B1B02]/30" /></div>
          {items.length ? <div className="mt-6 space-y-2">{[...pending, ...purchased].map((item) => <article key={item.id} className={`flex items-center gap-3 rounded-2xl border p-3.5 transition-colors ${item.purchased ? "border-[#009A39]/12 bg-[#009A39]/[0.045]" : "border-[#3B1B02]/9 bg-[#F3E8DE]/45"}`}><button type="button" onClick={() => togglePurchased(item)} aria-label={item.purchased ? `Mark ${item.name} as pending` : `Mark ${item.name} as purchased`} className={`grid size-8 shrink-0 place-items-center rounded-full border transition-colors ${item.purchased ? "border-[#009A39] bg-[#009A39] text-white" : "border-[#3B1B02]/20 bg-white text-transparent hover:border-[#009A39]"}`}><Check className="size-4" /></button><div className="min-w-0 flex-1"><h3 className={`truncate text-sm font-bold normal-case ${item.purchased ? "text-[#3B1B02]/42 line-through" : "text-[#3B1B02]"}`}>{item.name}</h3><p className="mt-1 text-xs text-[#3B1B02]/52">{number(item.quantity)} × {number(item.unit_quantity)} {units[item.measurement_unit]}</p></div><button type="button" onClick={() => deleteItem(item)} aria-label={`Delete ${item.name}`} className="grid size-9 place-items-center rounded-full text-[#3B1B02]/42 transition-colors hover:bg-[#B42318]/8 hover:text-[#B42318]"><Trash2 className="size-4" /></button></article>)}</div> : <div className="mt-6 grid min-h-72 place-items-center rounded-2xl border border-dashed border-[#3B1B02]/15 bg-[#F3E8DE]/35 px-6 text-center"><div><ShoppingBasket className="mx-auto size-7 text-[#3B1B02]/32" /><p className="mt-3 text-sm font-bold">Your shopping list is empty</p><p className="mt-1 text-xs text-[#3B1B02]/48">Add items here or send them directly from inventory.</p></div></div>}
        </section>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block space-y-2"><span className="text-[0.63rem] font-bold tracking-[0.13em] text-[#3B1B02]/60 uppercase">{label}</span>{children}</label>; }
function Summary({ value, label }: { value: number; label: string }) { return <div className="min-w-20 rounded-2xl border border-[#3B1B02]/8 bg-white px-4 py-3 text-center"><strong className="block font-[family:var(--font-accent-family)] text-xl">{value}</strong><span className="text-[0.58rem] font-bold tracking-[0.12em] text-[#3B1B02]/45 uppercase">{label}</span></div>; }
function number(value: number) { return new Intl.NumberFormat("en-GB", { maximumFractionDigits: 3 }).format(value); }
