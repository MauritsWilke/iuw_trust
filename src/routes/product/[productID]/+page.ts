import { error } from '@sveltejs/kit';
import type { InventoryData } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
    const res = await fetch("/inventory.json");
    const inventory = await res.json() as InventoryData[];
    const product = inventory.filter(v => v.ID === +params.productID)[0];
    if (product === null) error(404, "Product does not exist");
    return { product: product }
};