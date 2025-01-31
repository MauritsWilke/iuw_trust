<script lang="ts">
    import type { PageData } from "./$types";
    let { data, originalUrl }: { data: PageData; originalUrl: string } = $props();

    const imageFolder = data.product.Naam.toLowerCase().replaceAll(" ", "_");
    const fileName = data.product.Naam.replaceAll(" ", "") + "_";

    console.log(originalUrl);
</script>

<div id="wrapper" class="font-serif w-full h-full flex flex-row px-[70px] py-[170px] rounded-[3px]">
    <div id="images" class="w-full mr-[70px] flex gap-3 flex-col">
        <img src="/products/{imageFolder}/{fileName}1.jpeg" alt="" />
        <span class="flex flex-row w-full gap-3">
            <img src="/products/{imageFolder}/{fileName}2.jpeg" alt="" class="w-full rounded-[3px]" />
            <img src="/products/{imageFolder}/{fileName}3.jpeg" alt="" class="w-full rounded-[3px]" />
            <img src="/products/{imageFolder}/{fileName}4.jpeg" alt="" class="w-full rounded-[3px]" />
        </span>
    </div>

    <div id="info" class="w-full">
        <a href="/" class="flex flex-row gap-[2px] items-center">
            <img src="/icons/arrow_left_alt.svg" alt="Terug" />
            <p class="font-medium text-base text-teal">Terug</p>
        </a>
    </div>
</div>
