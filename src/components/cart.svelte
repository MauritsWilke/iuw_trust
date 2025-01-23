<script lang="ts">
    import { cart } from "$lib/cart.svelte.js";

    let itemCount = $derived(cart.content.length);
</script>

<a href="/cart">
    <div id="wrapper" class="relative cursor-pointer">
        {#if itemCount}
            <div id="counter" class="absolute -top-2 -right-1 bg-[#FF4646] h-[20px] flex justify-center items-center rounded-full" style="width: {itemCount > 9 ? 30 : 20}px">
                <p class="text-white font-bold font-serif text-[13px]" style="text-edge: cap">
                    {#if itemCount > 9}
                        9+
                    {:else}
                        {itemCount}
                    {/if}
                </p>
            </div>
        {/if}

        <img src="/icons/shopping_cart.svg" alt="shopping cart icon" class="w-[40px]" />
    </div>
</a>
