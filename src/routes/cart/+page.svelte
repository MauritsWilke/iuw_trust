<script lang="ts">
    import { cart } from "$lib/cart.svelte";

    // let { data }: { data: PageData } = $props();
    const subtotal = cart.content.map((item) => +item.Prijs).reduce((a, b) => a + b, 0);
    const BTW = Math.floor(0.21 * subtotal);
    const adminCost = cart.content.length - 0.01;
    const digitalAdminCost = cart.content.length * 2 - 1.01;

    const total = subtotal + BTW + adminCost + digitalAdminCost;
</script>

<div id="wrapper" class="w-full h-full flex flex-row items-center font-serif">
    <div id="winkelwagen" class="w-full p-[70px]">
        <h1 class="header pb-4">Winkelwagen</h1>

        <div id="items" class="flex gap-4 flex-col">
            {#each cart.content as item}
                <div class="w-full border border-teal rounded-[3px] flex px-5">
                    <button aria-label="remove item from cart" onclick={() => cart.removeItem(item.ID)}>
                        <img src="/icons/close.svg" alt="remove item from cart" />
                    </button>

                    <span class="flex justify-between w-full items-center">
                        <span class="flex flex-col -gap-1">
                            <h1 class="text-teal text-2xl font-medium">{item.Naam}</h1>
                            <p class="text-teal text-base font-extralight">{item.Continent}</p>
                        </span>
                        <p class="text-teal text-xl font-light">€{item.Prijs.toLocaleString()}</p>
                    </span>
                </div>
            {/each}
        </div>

        <span class="flex flex-row gap-[2px] items-center">
            <img src="/icons/arrow_left_alt.svg" alt="terug naar de winkel" />
            <p class="font-medium text-base text-teal">Terug naar de winkel</p>
        </span>
    </div>

    <div id="samenvatting" class="w-full flex items-center">
        <span>
            <h1 class="header">Samenvatting</h1>

            <div id="info">
                <span class="data">
                    <p>Subtotaal:</p>
                    <p>€{subtotal.toLocaleString()}</p>
                </span>
                <span class="data">
                    <p>BTW:</p>
                    <p>€{BTW.toLocaleString()}</p>
                </span>
                <span class="data">
                    <p>Administratiekosten:</p>
                    <p>€{adminCost.toLocaleString()}</p>
                </span>
                <span class="data">
                    <p>Administratiekosten:</p>
                    <p>€{digitalAdminCost.toLocaleString()}</p>
                </span>
                <span class="data">
                    <p>Totaal:</p>
                    <p>€{total.toLocaleString()}</p>
                </span>

                <hr />
                <p>U bestelt buiten Europa, er worden administratiekosten in rekening gebracht.</p>

                <button class="font-medium text-teal textl-xl w-full bg-primary py-5"> Afrekenen </button>
            </div>
        </span>
    </div>
</div>

<style lang="postcss">
    .data {
        @apply flex flex-row justify-between;
    }

    .header {
        @apply uppercase text-teal text-[32px] font-bold;
    }
</style>
