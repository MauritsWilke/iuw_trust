import { inCart } from "$lib/cart.svelte";
import type { InventoryData } from "$lib/types";
import type { PageLoad } from "../continent/[continent]/$types";

export const load: PageLoad = async ({ params, fetch }) => {
    const res = await fetch("/inventory.json");
    const inventory = await res.json() as InventoryData[];
    const relevantInventory = inventory.filter(item => inCart.includes(item.ID));

    return { cart: relevantInventory }
};