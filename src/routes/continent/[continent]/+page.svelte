<script lang="ts">
    import Product from "components/product.svelte";
    import type { PageData } from "./$types";
    import Footer from "components/footer.svelte";
    let { data }: { data: PageData } = $props();

    type Continent = {
        name: string;
        opacity: number;
        width: number;
        colour: string;
        font_size: number;
    };

    const continentData: { [key: string]: Continent } = {
        afrika: {
            name: "AFRICA.png",
            opacity: 40,
            width: 400,
            colour: "#701818",
            font_size: 21,
        },
        europa: {
            name: "EUROPE.png",
            opacity: 30,
            width: 300,
            colour: "#065050",
            font_size: 21,
        },
        azië: {
            name: "ASIA.png",
            opacity: 60,
            width: 600,
            colour: "#C7071D",
            font_size: 21,
        },
        oceanië: {
            name: "OCEANIA.png",
            opacity: 50,
            width: 101,
            colour: "#CD3700",
            font_size: 21,
        },
        "zuid-amerika": {
            name: "SOUTH_AMERICA.png",
            opacity: 40,
            width: 30,
            colour: "#4DA36D",
            font_size: 17.65,
        },
        "noord-amerika": {
            name: "NORTH_AMERICA.png",
            opacity: 40,
            width: 51,
            colour: "#2C3738",
            font_size: 16.1,
        },
    };
</script>

<div id="wrapper" class="w-full h-full">
    <div class="font-sans relative justify-center items-center flex h-full w-full" style="font-size: {continentData[data.continent].font_size}vw;">
        <p class="absolute text-transparent z-10" style="background-image: url('/continents/{continentData[data.continent].name}'); background-size: {continentData[data.continent].width}px; opacity: .{continentData[data.continent].opacity}">
            {data.continent}
        </p>
        <p class="absolute text-transparent" style="color: {continentData[data.continent].colour};">
            {data.continent}
        </p>

        <div id="waves" class="absolute bottom-0 w-full">
            <img src="/waves/bottom_wave.svg" alt="wave" class="absolute" style="bottom: 0; left: 0;" />
            <img src="/waves/middle_wave.svg" alt="wave" class="absolute" style="bottom: 0; left: 0;" />
            <img src="/waves/top_wave.svg" alt="wave" class="absolute" style="bottom: 0; left: 0;" />
        </div>
    </div>

    <div id="inventoryList" class="grid grid-cols-3 gap-4 p-4 max-sm:grid-cols-1 max-lg:grid-cols-2">
        {#each data.inventory as product}
            <Product ProductData={product}></Product>
        {/each}
    </div>

    <Footer></Footer>
</div>

<style lang="postcss">
    #wrapper {
        background: radial-gradient(50% 50% at 50% 50%, #fffeea 0%, #fffeea 35%, #b7e8eb 100%), #fff6e3;

        div p {
            background-repeat: repeat;

            -webkit-background-clip: text;
            background-clip: text;

            color: transparent;
        }
    }
</style>
