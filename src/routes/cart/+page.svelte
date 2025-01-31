<script lang="ts">
    import { formatPrice } from "$lib";
    import { cart } from "$lib/cart.svelte";
    import Footer from "components/footer.svelte";

    // let { data }: { data: PageData } = $props();
    const subtotal = cart.content.map((item) => +item.Prijs).reduce((a, b) => a + b, 0);
    const BTW = Math.floor(0.21 * subtotal);
    const adminCost = cart.content.length - 0.01;
    const digitalAdminCost = cart.content.length * 2 - 1.01;

    const total = subtotal + BTW + adminCost + digitalAdminCost;
</script>

<div id="wrapper" class="w-full flex flex-row font-serif px-[70px] pt-[170px]">
    <div id="winkelwagen" class="w-full mr-[70px]">
        <h1 class="header pb-2">Winkelwagen</h1>

        <div id="items" class="flex gap-4 flex-col">
            {#if cart.content.length === 0}
                <p class="text-teal">Je winkelwagentje is nog leeg!</p>
            {/if}

            {#each cart.content as item}
                <div class="w-full border border-teal rounded-[3px] flex px-5">
                    <button aria-label="remove item from cart" class="mr-5 my-9" onclick={() => cart.removeItem(item.ID)}>
                        <img src="/icons/close.svg" alt="remove item from cart" />
                    </button>

                    <span class="flex justify-between w-full items-center">
                        <span class="flex flex-col gap-[-10px]">
                            <h1 class="text-teal text-2xl font-medium">{item.Naam}</h1>
                            <p class="text-teal text-base font-extralight">{item.Continent}</p>
                        </span>

                        <p class="text-teal text-xl font-light">€{formatPrice(item.Prijs)}</p>
                    </span>
                </div>
            {/each}
        </div>

        <a href="/" class="flex flex-row gap-[2px] items-center py-8">
            <img src="/icons/arrow_left_alt.svg" alt="terug naar de winkel" />
            <p class="font-medium text-base text-teal">Terug naar de winkel</p>
        </a>
    </div>

    <div id="samenvatting" class="w-full flex px-[150px]">
        {#if cart.content.length > 0}
            <span>
                <h1 class="header pb-2">Samenvatting</h1>

                <div id="info" class="flex flex-col border border-teal rounded-[3px] px-6 py-8">
                    <span class="data">
                        <p>Subtotaal:</p>
                        <p>€{formatPrice(subtotal)}</p>
                    </span>
                    <span class="data">
                        <p>BTW:</p>
                        <p>€{formatPrice(BTW)}</p>
                    </span>
                    <span class="data">
                        <p>Administratiekosten:</p>
                        <p>€{formatPrice(adminCost)}</p>
                    </span>
                    <span class="data">
                        <p>Digitale administratiekosten:</p>
                        <p>€{formatPrice(digitalAdminCost)}</p>
                    </span>
                    <span class="text-teal text-lg font-medium flex justify-between">
                        <p>Totaal:</p>
                        <p>€{formatPrice(total)}</p>
                    </span>

                    <hr class="mt-8 border-teal h-1" />
                    <p class="font-extralight text-base text-teal">In verband met nieuwe wetgeving worden er administratiekosten in rekening gebracht.</p>

                    <a href="/afrekenen">
                        <button class="font-medium text-teal text-lg w-full py-4 flex justify-center items-center rounded-[3px] bg-primary hover:bg-primary-light mt-10"> Afrekenen </button>
                    </a>
                </div>
            </span>
        {/if}
    </div>
</div>

<Footer />

<style lang="postcss">
    .data {
        @apply flex justify-between;
        @apply font-light text-teal text-lg;
    }

    .header {
        @apply uppercase text-teal text-[32px] font-bold;
    }
</style>
