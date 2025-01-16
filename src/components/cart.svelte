<script lang="ts">
    let items = $state(0);

    // TODO maybe add cart items here as well?
</script>

<div id="wrapper" class="relative cursor-pointer" on:click={() => items++}>
    {#if items}
        <div id="counter" class="absolute -top-2 -right-1 bg-[#FF4646] w-[20px] h-[20px] flex justify-center items-center rounded-full">
            <p class="text-white font-bold font-serif text-[13px]" style="text-edge: cap">{items}</p>
        </div>
    {/if}

    <img src="icons/shopping_cart.svg" alt="shopping cart icon" class="w-[40px]" />
</div>
