<script lang="ts">
    import Cart from "./cart.svelte";
</script>

<nav class="h-[100px] w-screen bg-primary flex items-center justify-between font-serif uppercase font-bold text-teal overflow-visible z-10">
    <div class="adjacent">
        <a href="/continent/noord-amerika">Noord-amerika</a>
        <a href="/continent/zuid-amerika">Zuid-amerika</a>
        <a href="/continent/europa">Europa</a>
    </div>

    <a href="/">
        <div class="mt-[80px] flex items-center justify-center w-max flex-shrink-0">
            <img src="/icons/logo.svg" alt="company logo" class="object-contain" />
        </div>
    </a>

    <div class="adjacent">
        <a href="/continent/afrika">Afrika</a>
        <a href="/continent/azië">Azië</a>
        <a href="/continent/australië">Australië</a>

        <Cart />
    </div>
</nav>

<style lang="postcss">
    .adjacent {
        @apply w-full h-full flex justify-between items-center my-[44px] mx-[80px];
    }
</style>
