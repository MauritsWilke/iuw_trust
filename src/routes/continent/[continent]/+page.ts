import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { InventoryData } from '$lib/types';

const validContinents = [
    "afrika",
    "europa",
    "azië",
    "australië",
    "zuid-amerika",
    "noord-amerika",
]

const continentMap = {
    "afrika": "AFRICA",
    "europa": "EUROPE",
    "azië": "ASIA",
    "australië": "AUSTRALIA",
    "zuid-amerika": "SOUTH_AMERICA",
    "noord-amerika": "NORTH_AMERICA",
}



export const load: PageLoad = async ({ params, fetch }) => {
    if (validContinents.includes(params.continent)) {
        const res = await fetch("/inventory.json");
        const inventory = await res.json() as InventoryData[];
        const relevant = inventory.filter(v => v.Continent.toLowerCase() === params.continent);

        // @ts-ignore
        await fetch(`/continents/${continentMap[params.continent]}.png`);

        return { continent: params.continent, inventory: relevant }
    }

    redirect(307, "/"); // If not a valid continent => redirect

    error(404, 'Not found');
};