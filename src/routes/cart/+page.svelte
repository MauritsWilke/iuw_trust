<script lang="ts">
    import Product from "components/product.svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
    const subtotal = data.cart.map((item) => +item.Prijs).reduce((a, b) => a + b, 0);
    const BTW = Math.floor(0.21 * subtotal);
    const adminCost = data.cart.length - 0.01;
    const digitalAdminCost = data.cart.length * 2 - 1.01;

    const total = subtotal + BTW + adminCost + digitalAdminCost;
</script>

<div id="wrapper" class="w-full h-full flex flex-row items-center font-serif">
    <div id="winkelwagen" class="w-[50%]">
        <h1>Winkelwagen</h1>

        <div id="items" class="flex gap-4 flex-col">
            {#each data.cart as item}
                <div class="">
                    <button> X </button>

                    <h1>{item.Naam}</h1>
                    <h1>{item.Continent}</h1>
                    <p>{item.Prijs}</p>
                </div>
            {/each}
        </div>

        <p>Terug naar de winkel</p>
    </div>

    <div id="samenvatting">
        <h1>Samenvatting</h1>

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

            <button> Afrekenen </button>
        </div>
    </div>
</div>

<style lang="postcss">
    .data {
        @apply flex flex-row justify-between;
    }
</style>
