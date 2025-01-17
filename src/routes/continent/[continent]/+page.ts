import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const validContinents = [
    "afrika",
    "europa",
    "azië",
    "australië",
    "zuid-amerika",
    "noord-amerika",
]

export const load: PageLoad = ({ params }) => {
    if (validContinents.includes(params.continent)) return { continent: params.continent }

    redirect(307, "/"); // If not a valid continent => redirect

    error(404, 'Not found');
};