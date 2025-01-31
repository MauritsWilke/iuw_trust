<script lang="ts">
    import { cart } from "$lib/cart.svelte";

    // import { formatPrice } from "$lib";
    // let { data }: { data: PageData } = $props();
    // const subtotal = cart.content.map((item) => +item.Prijs).reduce((a, b) => a + b, 0);
    // const BTW = Math.floor(0.21 * subtotal);
    // const adminCost = cart.content.length - 0.01;
    // const digitalAdminCost = cart.content.length * 2 - 1.01;

    // const total = subtotal + BTW + adminCost + digitalAdminCost;

    const betaalmethodes = ["iDeal", "PayPal", "Mastercard", "Bitcoin"];
    let selected = $state("");

    let email = $state("");
    let name = $state("");
    let canCheckout = $derived(email.length && name.length && selected.length);

    function clearCart() {
        cart.clear();
    }
</script>

<div id="wrapper" class="w-full h-full flex flex-row font-serif px-[70px] py-[170px]">
    <div id="winkelwagen" class="max-w-screen-md">
        <h1 class="header pb-2">Afrekenen</h1>

        <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-1">
                <h2>Persoonlijke gegevens</h2>
                <form class="flex flex-col gap-2">
                    <div class="inputfield">
                        <label for="email">Email adres</label>
                        <input type="email" id="email" name="email" placeholder="email@meerenzo.nl" bind:value={email} />
                    </div>
                    <div class="inputfield">
                        <label for="name">Volledige naam</label>
                        <input type="text" id="name" name="name" placeholder="Myrthe Meren" bind:value={name} />
                    </div>
                </form>
            </div>

            <div class="flex flex-col gap-0.5">
                <h2>Betaalmethode</h2>
                <div class="flex flex-row gap-2 justify-between flex-wrap">
                    {#each betaalmethodes as methode}
                        <button style="border-width: {selected === methode ? 2 : 1}px" onclick={() => (selected = methode)} class="flex justify-center items-center gap-2 border border-teal px-3 py-2 rounded-[3px] flex-grow cursor-pointer box-border hover:border-2">
                            <img src="/logos/{methode}.png" alt="{methode} logo" />
                            <p class="text-teal font-medium">{methode}</p>
                        </button>
                    {/each}
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <a href="/succes">
                <button class="cart bg-primary hover:bg-primary-light h-6 mt-10" onclick={clearCart} disabled={!canCheckout}>
                    <div class="">Bestellen en betalen</div>
                </button>
            </a>

            <div class="flex items-center gap-1">
                <img src="/icons/lock.svg" alt="" />
                <p class="font-light text-sm text-teal">U zult doorgestuurt worden naar een beveiligde betaalomgeving</p>
            </div>
        </div>

        <a href="/cart" class="flex flex-row gap-[2px] items-center py-8">
            <img src="/icons/arrow_left_alt.svg" alt="terug naar de winkel" />
            <p class="font-medium text-base text-teal">Terug naar winkelkarretje</p>
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
