<script lang="ts">
    import { cart } from "$lib/cart.svelte";
    import type { InventoryData } from "$lib/types";

    let { ProductData }: { ProductData: InventoryData } = $props();

    function addToCart() {
        if (cart.content.find((v) => v.ID === ProductData.ID)) return;
        cart.addItem(ProductData);
    }
</script>

<!-- on:click={addToCart} -->
<a href="/product/{ProductData.ID}" id="wrapper" class="font-serif border-red-500 border-solid border">
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
</a>
