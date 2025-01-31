<script lang="ts">
    import { formatPrice } from "$lib";
    import { cart } from "$lib/cart.svelte";

    // let { data }: { data: PageData } = $props();
    const subtotal = cart.content.map((item) => +item.Prijs).reduce((a, b) => a + b, 0);
    const BTW = Math.floor(0.21 * subtotal);
    const adminCost = cart.content.length - 0.01;
    const digitalAdminCost = cart.content.length * 2 - 1.01;

    const total = subtotal + BTW + adminCost + digitalAdminCost;

    const betaalmethodes = ["iDeal", "PayPal", "Mastercard", "Bitcoin"];

    function clearCart() {
        cart.clear();
    }
</script>

<div id="wrapper" class="w-full h-full flex flex-row font-serif px-[70px] py-[170px]">
    <div id="winkelwagen" class="max-w-screen-md">
        <h1 class="header pb-2">Bestelling succesvol</h1>

        <a href="/">
            <button class="cart bg-primary hover:bg-primary-light h-6 mt-10">
                <div class="">Terug naar homepagina</div>
            </button>
        </a>
    </div>
</div>

<style lang="postcss">
    .header {
        @apply uppercase text-teal text-[32px] font-bold;
    }

    .cart {
        @apply font-medium text-teal text-lg px-12 py-6 flex justify-center items-center rounded-[3px] w-full;
    }

    input {
        @apply border border-teal rounded-[3px] pl-[10px] py-1 text-teal text-lg  font-light box-border bg-off-white;

        &:focus {
            @apply border-teal border-2 outline-none;
        }
    }

    label {
        @apply text-teal text-base font-light;
    }

    h2 {
        @apply text-teal font-medium text-xl;
    }

    .inputfield {
        @apply flex flex-col;
    }
</style>
