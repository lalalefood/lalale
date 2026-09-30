"use client";

import { useState } from "react";
import {
  Archive, Bell, Boxes, CalendarDays, ChevronDown, CircleGauge, Ellipsis, Layers3,
  LoaderCircle, PackageX, Pencil, Plus, Search, ShoppingCart, SlidersHorizontal, Trash2, X,
} from "lucide-react";
import {
  measurementUnits, type InventoryItem, type InventoryStatus, type MeasurementUnit,
} from "@/app/lib/inventory";

const statusDetails: Record<InventoryStatus, { label: string; className: string }> = {
  good: { label: "Good", className: "bg-[#009A39]/12 text-[#00752C]" },
  low_stock: { label: "Low stock", className: "bg-[#FECF02]/30 text-[#3B1B02]" },
  out_of_stock: { label: "Out of stock", className: "bg-[#3B1B02]/10 text-[#3B1B02]" },
};
const unitLabels: Record<MeasurementUnit, string> = { unit: "unit", ml: "ml", l: "L", g: "g", kg: "kg" };
const blankForm = { name: "", quantity: "", measurement_unit: "unit" as MeasurementUnit, unit_quantity: "1" };

type Props = { initialItems: InventoryItem[]; setupError?: string; adminName: string; today: string };

export function InventoryDashboard({ initialItems, setupError, adminName, today }: Props) {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | InventoryStatus>("all");
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [form, setForm] = useState(blankForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [notice, setNotice] = useState("");

  const normalizedSearch = search.trim().toLowerCase();
  const filteredItems = items.filter((item) =>
    (!normalizedSearch || item.name.toLowerCase().includes(normalizedSearch)) &&
    (statusFilter === "all" || item.status === statusFilter),
  );
  const metrics = [
    { label: "Unique items", description: "Different products in inventory", value: items.length, icon: Archive, tone: "bg-[#009A39]/12 text-[#009A39]" },
    { label: "Stock units", description: "Packages and individual units held", value: formatNumber(items.reduce((sum, item) => sum + item.quantity, 0)), icon: Layers3, tone: "bg-[#3B1B02]/9 text-[#3B1B02]" },
    { label: "Low stock", description: "Items with one unit or less", value: items.filter((item) => item.status === "low_stock").length, icon: CircleGauge, tone: "bg-[#FECF02]/28 text-[#3B1B02]" },
    { label: "Out of stock", description: "Items with zero quantity", value: items.filter((item) => item.status === "out_of_stock").length, icon: PackageX, tone: "bg-[#3B1B02]/10 text-[#3B1B02]" },
  ];

  function openCreateEditor() {
    setEditingItem(null); setForm(blankForm); setFormError(""); setEditorOpen(true);
  }
  function openEditEditor(item: InventoryItem) {
    setEditingItem(item);
    setForm({ name: item.name, quantity: String(item.quantity), measurement_unit: item.measurement_unit, unit_quantity: String(item.unit_quantity) });
    setFormError(""); setOpenMenu(null); setEditorOpen(true);
  }
  async function saveItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSaving(true); setFormError("");
    const response = await fetch(editingItem ? `/api/admin/inventory/${editingItem.id}` : "/api/admin/inventory", {
      method: editingItem ? "PATCH" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
    });
    const result = (await response.json()) as { item?: InventoryItem; error?: string };
    if (!response.ok || !result.item) { setFormError(result.error ?? "Unable to save this item."); setSaving(false); return; }
    setItems((current) => editingItem ? current.map((item) => item.id === result.item?.id ? result.item : item) : [result.item!, ...current]);
    setSaving(false); setEditorOpen(false);
  }
  async function deleteItem(item: InventoryItem) {
    if (!window.confirm(`Delete ${item.name} from the inventory?`)) return;
    const response = await fetch(`/api/admin/inventory/${item.id}`, { method: "DELETE" });
    if (response.ok) setItems((current) => current.filter((currentItem) => currentItem.id !== item.id));
    setOpenMenu(null);
  }
  async function addToShoppingList(item: InventoryItem) {
    const response = await fetch("/api/admin/shopping-list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: item.name,
        quantity: 1,
        measurement_unit: item.measurement_unit,
        unit_quantity: item.unit_quantity,
        inventory_item_id: item.id,
      }),
    });
    setOpenMenu(null);
    setNotice(response.ok ? `${item.name} added to the shopping list.` : "Unable to add this item.");
    window.setTimeout(() => setNotice(""), 3000);
  }

  return (
    <main className="min-h-screen px-4 pt-19 pb-10 sm:px-7 lg:px-9 lg:pt-8 xl:px-12">
      {notice ? <div role="status" className="fixed right-4 bottom-4 z-[60] max-w-sm rounded-2xl bg-[#3B1B02] px-5 py-4 text-xs font-semibold text-[#F3E8DE] shadow-2xl">{notice}</div> : null}
      <header className="flex flex-col gap-6 border-b border-[#3B1B02]/12 pb-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[0.62rem] font-bold tracking-[0.3em] text-[#009A39] uppercase">Lalale operations</p>
          <h1 className="mt-2 font-[family:var(--font-accent-family)] text-3xl text-[#3B1B02] normal-case sm:text-4xl">Inventory Management</h1>
          <p className="mt-2 flex items-center gap-2 text-xs text-[#3B1B02]/55"><CalendarDays className="size-3.5" /> {today}</p>
        </div>
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button type="button" aria-label="Notifications" className="relative grid size-11 place-items-center rounded-full border border-[#3B1B02]/10 bg-white text-[#3B1B02] shadow-sm"><Bell className="size-4" /><span className="absolute top-2 right-2 size-2 rounded-full bg-[#FECF02] ring-2 ring-white" /></button>
          <div className="flex items-center gap-3 rounded-full border border-[#3B1B02]/10 bg-white py-1.5 pr-4 pl-1.5 shadow-sm"><span className="grid size-8 place-items-center rounded-full bg-[#3B1B02] text-xs font-bold text-[#FECF02]">{adminName.slice(0, 1).toUpperCase()}</span><span className="hidden text-xs font-semibold text-[#3B1B02] sm:block">{adminName}</span><ChevronDown className="size-3.5 text-[#3B1B02]/45" /></div>
        </div>
      </header>

      {setupError ? <div className="mt-6 rounded-2xl border border-[#FECF02] bg-[#FECF02]/14 p-4 text-xs leading-6 text-[#3B1B02]"><strong className="block">Inventory database setup required</strong>Run <code className="rounded bg-white px-1.5 py-0.5">supabase/schema.sql</code> in the Supabase SQL Editor. {setupError}</div> : null}

      <section className="mt-7 grid gap-4 sm:grid-cols-2 2xl:grid-cols-4" aria-label="Inventory summary">
        {metrics.map(({ label, description, value, icon: Icon, tone }) => <article key={label} className="rounded-[1.65rem] border border-[#3B1B02]/8 bg-white p-5 shadow-[0_18px_45px_-35px_rgba(59,27,2,.4)]"><div className="flex items-start justify-between gap-4"><span className={`grid size-11 place-items-center rounded-2xl ${tone}`}><Icon className="size-5" /></span><span className="font-[family:var(--font-accent-family)] text-3xl text-[#3B1B02]">{value}</span></div><h2 className="mt-5 text-sm font-bold text-[#3B1B02] normal-case">{label}</h2><p className="mt-1 text-[0.7rem] leading-5 text-[#3B1B02]/48">{description}</p></article>)}
      </section>

      <section className="mt-7 rounded-[1.8rem] border border-[#3B1B02]/8 bg-white p-4 shadow-[0_24px_60px_-44px_rgba(59,27,2,.46)] sm:p-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div><p className="text-[0.6rem] font-bold tracking-[0.26em] text-[#009A39] uppercase">Live overview</p><h2 className="mt-1 font-[family:var(--font-accent-family)] text-2xl text-[#3B1B02] normal-case">Inventory Overview</h2></div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex h-11 min-w-0 items-center gap-2 rounded-full border border-[#3B1B02]/14 px-4 sm:min-w-64"><Search className="size-4 text-[#3B1B02]/45" /><input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Search item" className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-[#3B1B02]/32" /></label>
            <label className="relative flex h-11 items-center gap-2 rounded-full border border-[#3B1B02]/14 px-4 text-xs text-[#3B1B02]"><SlidersHorizontal className="size-4" /><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as "all" | InventoryStatus)} className="appearance-none bg-transparent pr-5 outline-none"><option value="all">All statuses</option><option value="good">Good</option><option value="low_stock">Low stock</option><option value="out_of_stock">Out of stock</option></select><ChevronDown className="pointer-events-none absolute right-3 size-3" /></label>
            <button onClick={openCreateEditor} type="button" className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#3B1B02] px-5 text-[0.68rem] font-bold tracking-[0.15em] text-[#F3E8DE] uppercase transition-colors hover:bg-[#009A39]"><Plus className="size-4 text-[#FECF02]" /> Add item</button>
          </div>
        </div>

        {filteredItems.length ? <>
          <div className="mt-6 hidden overflow-x-auto xl:block">
            <table className="w-full min-w-[820px] border-separate border-spacing-0 text-left">
              <thead><tr className="bg-[#F3E8DE] text-[0.68rem] tracking-[0.12em] text-[#3B1B02]/58 uppercase"><th className="rounded-l-xl px-4 py-4">Item name</th><th className="px-4 py-4">Quantity</th><th className="px-4 py-4">Measure</th><th className="px-4 py-4">Unit quantity</th><th className="px-4 py-4">Total amount</th><th className="px-4 py-4">Status</th><th className="rounded-r-xl px-4 py-4 text-right">Action</th></tr></thead>
              <tbody>{filteredItems.map((item) => <tr key={item.id} className={`group text-sm text-[#3B1B02] transition-colors ${item.status === "low_stock" ? "bg-[#B42318]/[0.055] hover:bg-[#B42318]/[0.085]" : "hover:bg-[#FECF02]/7"}`}><td className="border-b border-[#3B1B02]/8 px-4 py-4 font-semibold">{item.name}</td><td className="border-b border-[#3B1B02]/8 px-4 py-4">{formatNumber(item.quantity)}</td><td className="border-b border-[#3B1B02]/8 px-4 py-4">{unitLabels[item.measurement_unit]}</td><td className="border-b border-[#3B1B02]/8 px-4 py-4">{formatUnitQuantity(item)}</td><td className="border-b border-[#3B1B02]/8 px-4 py-4 font-semibold">{formatTotalAmount(item)}</td><td className="border-b border-[#3B1B02]/8 px-4 py-4"><StatusBadge status={item.status} /></td><td className="relative border-b border-[#3B1B02]/8 px-4 py-4 text-right"><button type="button" onClick={() => setOpenMenu(openMenu === item.id ? null : item.id)} className="rounded-full border border-[#3B1B02]/12 p-2 transition-colors hover:bg-[#3B1B02] hover:text-[#F3E8DE]" aria-label={`Actions for ${item.name}`}><Ellipsis className="size-4" /></button>{openMenu === item.id ? <ActionMenu item={item} onEdit={openEditEditor} onDelete={deleteItem} onShoppingList={addToShoppingList} /> : null}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:hidden">{filteredItems.map((item) => <article key={item.id} className={`rounded-2xl border p-4 ${item.status === "low_stock" ? "border-[#B42318]/15 bg-[#B42318]/[0.055]" : "border-[#3B1B02]/9 bg-[#F3E8DE]/55"}`}><div className="flex items-start justify-between gap-3"><div className="min-w-0"><h3 className="truncate text-base font-bold text-[#3B1B02] normal-case">{item.name}</h3><p className="mt-1 text-xs text-[#3B1B02]/55">{formatNumber(item.quantity)} {item.quantity === 1 ? "stock unit" : "stock units"}</p></div><StatusBadge status={item.status} /></div><dl className="mt-4 grid grid-cols-2 gap-3 border-t border-[#3B1B02]/8 pt-4 text-xs"><div><dt className="text-[#3B1B02]/45">Unit size</dt><dd className="mt-1 font-semibold text-[#3B1B02]">{formatUnitQuantity(item)}</dd></div><div className="text-right"><dt className="text-[#3B1B02]/45">Total amount</dt><dd className="mt-1 font-semibold text-[#3B1B02]">{formatTotalAmount(item)}</dd></div></dl><div className="mt-4 flex gap-2"><button type="button" onClick={() => addToShoppingList(item)} className="grid size-9 place-items-center rounded-full border border-[#3B1B02]/14" aria-label={`Add ${item.name} to shopping list`}><ShoppingCart className="size-3.5" /></button><button type="button" onClick={() => openEditEditor(item)} className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#3B1B02]/14 py-2 text-[0.65rem] font-bold uppercase"><Pencil className="size-3.5" /> Restock / edit</button><button type="button" onClick={() => deleteItem(item)} className="grid size-9 place-items-center rounded-full border border-black/12" aria-label={`Delete ${item.name}`}><Trash2 className="size-3.5" /></button></div></article>)}</div>
        </> : <div className="mt-6 grid min-h-72 place-items-center rounded-2xl border border-dashed border-[#3B1B02]/15 bg-[#F3E8DE]/45 px-6 text-center"><div><span className="mx-auto grid size-14 place-items-center rounded-full bg-[#FECF02]/25 text-[#3B1B02]"><Boxes className="size-6" /></span><h3 className="mt-4 font-[family:var(--font-accent-family)] text-xl text-[#3B1B02] normal-case">No inventory items found</h3><p className="mt-2 text-xs leading-5 text-[#3B1B02]/52">{items.length ? "Try another search or status filter." : "Add your first ingredient to start tracking stock."}</p></div></div>}
      </section>

      {editorOpen ? <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"><button type="button" className="absolute inset-0" onClick={() => !saving && setEditorOpen(false)} aria-label="Close item editor" /><section role="dialog" aria-modal="true" aria-labelledby="item-editor-title" className="relative my-6 w-full max-w-2xl rounded-[1.8rem] bg-[#F3E8DE] p-5 shadow-2xl sm:p-8"><div className="flex items-start justify-between gap-4"><div><p className="text-[0.6rem] font-bold tracking-[0.25em] text-[#009A39] uppercase">Inventory item</p><h2 id="item-editor-title" className="mt-2 font-[family:var(--font-accent-family)] text-2xl text-[#3B1B02] normal-case">{editingItem ? "Edit item" : "Add a new item"}</h2></div><button type="button" onClick={() => setEditorOpen(false)} className="rounded-full border border-[#3B1B02]/10 p-2 text-[#3B1B02]" aria-label="Close"><X className="size-4" /></button></div><div className="mt-6 rounded-2xl border border-[#3B1B02]/8 bg-white/55 p-4 text-[0.7rem] leading-5 text-[#3B1B02]/60">Example: for two 600g jars, enter quantity <strong>2</strong>, unit quantity <strong>600</strong> and measure <strong>g</strong>.</div><form onSubmit={saveItem} className="mt-6 grid gap-5 sm:grid-cols-2"><div className="sm:col-span-2"><FormField label="Item name"><input required minLength={2} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="e.g. Pistachio cream" className="admin-input" /></FormField></div><FormField label="Stock quantity"><input required type="number" min="0" step="0.01" value={form.quantity} onChange={(event) => setForm({ ...form, quantity: event.target.value })} placeholder="2" className="admin-input" /></FormField><FormField label="Unit quantity"><input required type="number" min="0.001" step="0.001" value={form.unit_quantity} onChange={(event) => setForm({ ...form, unit_quantity: event.target.value })} placeholder="600" className="admin-input" /></FormField><div className="sm:col-span-2"><FormField label="Measurement unit"><select required value={form.measurement_unit} onChange={(event) => setForm({ ...form, measurement_unit: event.target.value as MeasurementUnit })} className="admin-input">{measurementUnits.map((unit) => <option key={unit} value={unit}>{unitLabels[unit]}</option>)}</select></FormField></div>{formError ? <p role="alert" className="text-xs text-black sm:col-span-2">{formError}</p> : null}<div className="flex flex-col-reverse gap-3 border-t border-[#3B1B02]/10 pt-5 sm:col-span-2 sm:flex-row sm:justify-end"><button type="button" onClick={() => setEditorOpen(false)} className="h-11 rounded-full border border-[#3B1B02]/14 px-6 text-[0.68rem] font-bold tracking-[0.14em] uppercase">Cancel</button><button disabled={saving} type="submit" className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#3B1B02] px-7 text-[0.68rem] font-bold tracking-[0.14em] text-[#F3E8DE] uppercase transition-colors hover:bg-[#009A39] disabled:opacity-60">{saving ? <LoaderCircle className="size-4 animate-spin" /> : <Plus className="size-4 text-[#FECF02]" />}{editingItem ? "Save changes" : "Add item"}</button></div></form></section></div> : null}
    </main>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block space-y-2"><span className="text-[0.65rem] font-bold tracking-[0.14em] text-[#3B1B02]/65 uppercase">{label}</span>{children}</label>; }
function StatusBadge({ status }: { status: InventoryStatus }) { const detail = statusDetails[status]; return <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[0.6rem] font-bold ${detail.className}`}>{detail.label}</span>; }
function ActionMenu({ item, onEdit, onDelete, onShoppingList }: { item: InventoryItem; onEdit: (item: InventoryItem) => void; onDelete: (item: InventoryItem) => void; onShoppingList: (item: InventoryItem) => void }) { return <div className="absolute top-13 right-3 z-20 w-40 rounded-xl border border-[#3B1B02]/10 bg-white p-1.5 text-left shadow-xl"><button type="button" onClick={() => onShoppingList(item)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-[0.68rem] hover:bg-[#FECF02]/18"><ShoppingCart className="size-3.5" /> Add to list</button><button type="button" onClick={() => onEdit(item)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-[0.68rem] hover:bg-[#F3E8DE]"><Pencil className="size-3.5" /> Restock / edit</button><button type="button" onClick={() => onDelete(item)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-[0.68rem] hover:bg-black/7"><Trash2 className="size-3.5" /> Delete</button></div>; }
function formatNumber(value: number) { return new Intl.NumberFormat("en-GB", { maximumFractionDigits: 3 }).format(value); }
function formatUnitQuantity(item: InventoryItem) { return `${formatNumber(item.unit_quantity)} ${unitLabels[item.measurement_unit]}`; }
function formatTotalAmount(item: InventoryItem) { return `${formatNumber(item.quantity * item.unit_quantity)} ${unitLabels[item.measurement_unit]}`; }
