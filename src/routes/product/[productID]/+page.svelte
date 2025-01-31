<script lang="ts">
    import { formatPrice } from "$lib";
    import { cart } from "$lib/cart.svelte";
    import RotatingText from "components/RotatingText.svelte";
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();

    const imageFolder = data.product.Naam.toLowerCase().replaceAll(" ", "_");
    const fileName = data.product.Naam.replaceAll(" ", "") + "_";

    const watermap = {};

    let isInCart = $derived(cart.content.find((v) => v.ID === data.product.ID));

    function addToCart() {
        if (cart.content.find((v) => v.ID === data.product.ID)) return;
        cart.addItem(data.product);
    }

    function removeFromCart() {
        cart.removeItem(data.product.ID);
    }
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>Meer & Zo - {data.product.Naam}</title>
    <meta name="title" content="Meer & Zo - {data.product.Naam}" />
    <meta name="description" content={data.product.Omschrijving} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="meerenzo.mauritswilke.com/product/{data.product.ID}" />
    <meta property="og:title" content="Meer & Zo - {data.product.Naam}" />
    <meta property="og:description" content={data.product.Omschrijving} />
    <meta property="og:image" content="/products/{imageFolder}/{fileName}1.jpeg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="meerenzo.mauritswilke.com/product/{data.product.ID}" />
    <meta property="twitter:title" content="Meer & Zo - {data.product.Naam}" />
    <meta property="twitter:description" content={data.product.Omschrijving} />
    <meta property="twitter:image" content="/products/{imageFolder}/{fileName}1.jpeg" />
</svelte:head>

<div id="wrapper" class="font-serif w-full h-full flex flex-row px-[70px] py-[170px] rounded-[3px]">
    <div id="images" class="w-full mr-[70px] flex gap-3 flex-col">
        <img src="/products/{imageFolder}/{fileName}1.jpeg" alt="" />
        <div class="w-full grid grid-cols-3 gap-3">
            <img src="/products/{imageFolder}/{fileName}2.jpeg" alt="" class="rounded-[3px]" />
            <img src="/products/{imageFolder}/{fileName}3.jpeg" alt="" class="rounded-[3px]" />
            <img src="/products/{imageFolder}/{fileName}4.jpeg" alt="" class="rounded-[3px]" />
        </div>
    </div>

    <div id="info" class="w-full relative">
        {#if data.product.ID === 6}
            <div id="NEW" class="absolute right-3 -top-20">
                <RotatingText text="NIEUW NIEUW NIEUW NIEUW NIEUW" iconURL="/icons/release_alert.svg" />
            </div>
        {/if}

        <a href="/" class="flex flex-row gap-[2px] items-center mb-5">
            <img src="/icons/arrow_left_alt.svg" alt="Terug" />
            <p class="font-medium text-base text-teal">Terug</p>
        </a>

        <div class="flex flex-col gap-12">
            <div id="header subheader">
                <h1 class="header">{data.product.Naam}</h1>
                <p class="text-teal opacity-70">{data.product.Continent} • {data.product.Land}</p>
            </div>

            <div class="flex flex-row justify-between">
                <p class="leading-[135%] text-lg text-teal">{data.product.Omschrijving}</p>
                <div id="prijs" class="ml-6 flex flex-row h-full gap-2">
                    <div class="border-teal border rounded-b-full"></div>
                    <div class="flex flex-col">
                        <p class="text-teal opacity-70">Vraagprijs</p>
                        <p class="text-lg text-teal">{formatPrice(data.product.Prijs)}</p>
                    </div>
                </div>
            </div>

            <div id="icons" class="flex flex-row w-full justify-between">
                <span class="icon">
                    <img src="/icons/open_in_full.svg" alt="oppervlakte" />
                    <p>{data.product.Oppervlakte} km²</p>
                </span>
                <span class="icon">
                    <img src="/icons/water_medium.svg" alt="volume" />
                    <p>{data.product.Volume} km³</p>
                </span>
                <span class="icon">
                    <img src="/icons/arrow_cool_down.svg" alt="maximale diepte" />
                    <p>{data.product.Diepte} m</p>
                </span>
                <span class="icon">
                    <img src="/icons/{data.product.Temperatuur > 20 ? 'temp_hot' : 'temp_cold'}.svg" alt="gemiddelde temperaturu" />
                    <p>{data.product.Temperatuur} °C</p>
                </span>
            </div>

            {#if !isInCart}
                <button class="cart bg-primary hover:bg-primary-light" onclick={addToCart}>
                    <div class="flex gap-2 items-center">
                        <img src="/icons/add_shopping_cart.svg" alt="" class="h-6" />
                        In winkelwagen
                    </div>
                </button>
            {:else}
                <button class="cart border-[2px] border-[#063E2A] hover:border-[#24a175]" onclick={removeFromCart}>
                    <div class="flex gap-2 items-center">
                        <img src="/icons/check.svg" alt="" class="h-6" />
                        In winkelwagen
                    </div>
                </button>
            {/if}
        </div>
    </div>
</div>

<style lang="postcss">
    .cart {
        @apply font-medium text-teal text-lg w-full py-4 flex justify-center items-center rounded-[3px];
    }

    .icon {
        @apply w-full flex gap-2 flex-col items-center;
        @apply text-teal font-semibold;

        img {
            @apply h-6;
        }
    }

    .header {
        @apply uppercase text-teal text-[32px] font-bold;
    }
</style>
