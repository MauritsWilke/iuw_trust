<script lang="ts">
    import { onNavigate } from "$app/navigation";
    import Cart from "./cart.svelte";

    let checked = false;
    onNavigate(() => {
        checked = false;
    });
</script>

<nav class="h-[100px] w-screen bg-primary flex items-center xl:justify-between max-xl:justify-center font-serif uppercase font-bold text-teal overflow-visible z-10">
    <div class="max-xl:flex xl:hidden absolute left-8 w-[35px] h-[30px] cursor-pointer">
        <!-- Menu container -->
        <input class="checkbox w-full h-full z-10 opacity-0 cursor-pointer" type="checkbox" id="menu-checkbox" bind:checked />

        <div id="burger" class="absolute w-full h-full flex justify-between flex-col">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>

        <div class="absolute top-[40px] w-max flex flex-col rounded bg-primary gap-[2px] box-border" id="content">
            <a href="/continent/noord-amerika">Noord-amerika</a>
            <a href="/continent/zuid-amerika">Zuid-amerika</a>
            <a href="/continent/europa">Europa</a>
            <a href="/continent/afrika">Afrika</a>
            <a href="/continent/azië">Azië</a>
            <a href="/continent/australië">Australië</a>
        </div>
    </div>

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

    <div class="max-xl:flex xl:hidden absolute right-8">
        <Cart />
    </div>
</nav>

<style lang="postcss">
    .adjacent {
        @apply w-full h-full flex justify-between items-center my-[44px] mx-[80px] max-xl:hidden xl:flex;
    }

    .line {
        @apply h-[4px] w-full bg-teal rounded-md;
    }

    #menu-checkbox ~ #burger .line {
        transition:
            transform 0.5s ease-in-out,
            width 0.5s ease-in-out;
        transform-origin: left;
        width: 100%;

        &:nth-child(1),
        &:nth-child(3) {
            transform: rotate(0);
        }

        &:nth-child(2) {
            transform: scaleY(1);
        }
    }

    #menu-checkbox:checked ~ #burger .line {
        width: 36.5px;

        &:nth-child(1) {
            transform: rotate(45deg);
        }

        &:nth-child(2) {
            transform: scaleY(0);
            width: 100%;
        }

        &:nth-child(3) {
            transform: rotate(-45deg);
        }
    }

    #menu-checkbox ~ #content {
        transition:
            max-height 0.5s ease-in-out,
            padding 0.5s ease-in-out,
            border-width 0.5s ease-in-out,
            border-color 0.5s ease-in-out;

        max-height: 0;
        padding: 0 8px;
        overflow: hidden;
        border-width: 0px;
    }

    #menu-checkbox:checked ~ #content {
        max-height: calc(154px + 16px);
        padding: 8px;

        border-width: 2px;
        border-style: solid;
        border-color: #003742;
    }
</style>
