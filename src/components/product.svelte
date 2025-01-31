<script lang="ts">
    import { formatPrice } from "$lib";
    import { cart } from "$lib/cart.svelte";
    import type { InventoryData } from "$lib/types";
    import RotatingText from "./RotatingText.svelte";

    let { ProductData }: { ProductData: InventoryData } = $props();

    const imageFolder = ProductData.Naam.toLowerCase()
        .replaceAll(" ", "_")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    const fileName = (ProductData.Naam.replaceAll(" ", "") + "_").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
</script>

<a href="/product/{ProductData.ID}" id="wrapper" class="font-serif text-teal relative">
    {#if ProductData.ID === 6}
        <div id="NEW" class="absolute -left-7 -top-7">
            <RotatingText text="NIEUW NIEUW NIEUW NIEUW NIEUW" iconURL="/icons/release_alert.svg" />
        </div>
    {/if}

    <div class="rounded-[3px] h-full flex flex-col justify-between overflow-clip">
        <img src="/products/{imageFolder}/{fileName}1.jpeg" alt="" />

        <div class="p-2 h-full flex flex-col justify-between border-x border-b border-teal">
            <div class="flex flex-col">
                <h1 class="font-bold text-2xl">{ProductData.Naam}</h1>
                <p class="font-light text-sm text-opacity-60 mb-3">{formatPrice(ProductData.Prijs)}</p>

                <p>{ProductData.Omschrijving}</p>
            </div>

            <button class="cart bg-primary hover:bg-primary-light h-6 mt-10">
                <div class="">Meer info</div>
            </button>
        </div>
    </div>
</a>

<style lang="postcss">
    .cart {
        @apply font-medium text-teal text-lg px-12 py-6 flex justify-center items-center rounded-[3px] w-full;
    }
</style>
