<script lang="ts">
    import type { UserData } from "$lib/types";

    const data = localStorage.getItem("userData")!;
    const userData = JSON.parse(data) as UserData;
</script>

<div id="wrapper" class="w-full h-full flex flex-row font-serif px-[70px] py-[170px]">
    <div id="winkelwagen" class="max-w-screen-md">
        <h1 class="header pb-2">Bestelling succesvol</h1>

        <p class="text-teal">Beste {userData.name},<br />We hebben uw bestelling ontvangen en gaan ermee aan de slag!</p>

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
</style>
