<script lang="ts">
    import { inCart } from "$lib/cart.svelte";
    import type { InventoryData } from "$lib/types";

    let { ProductData }: { ProductData: InventoryData } = $props();

    function addToCart() {
        if (inCart.includes(ProductData.ID)) return;
        inCart.push(ProductData.ID);
    }
</script>

<div id="wrapper" class="font-serif border-red-500 border-solid border" on:click={addToCart}>
    <h1>{ProductData.Naam}</h1>
    <p>Prijs: {ProductData.Continent}</p>
    <p>Land: {ProductData.Land}</p>
    <p>Prijs: {ProductData.Prijs}</p>
    <p class="pl-1">{ProductData.Omschrijving}</p>

    <div class="flex justify-between flex-row">
        <p>Volume: {ProductData.Volume}</p>
        <p>Temperatuur: {ProductData.Temperatuur}</p>
        <p>Diepte: {ProductData.Diepte}</p>
        <p>Oppervlakte: {ProductData.Oppervlakte}</p>
    </div>
</div>
