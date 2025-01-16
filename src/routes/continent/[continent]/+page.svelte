<script lang="ts">
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();

    const colourMap: { [key: string]: string } = {
        afrika: "#701818",
        europa: "#065050",
        azië: "#C7071D",
        australië: "#CD3700",
        "zuid-amerika": "#FF0004",
        "noord-amerika": "#2C3738",
    };

    type Continent = {
        name: string;
        opacity: number;
        width: number;
    };

    const imageMap: { [key: string]: Continent } = {
        afrika: {
            name: "AFRICA.png",
            opacity: 40,
            width: 400,
        },
        europa: {
            name: "EUROPE.png",
            opacity: 30,
            width: 300,
        },
        azië: {
            name: "ASIA.png",
            opacity: 60,
            width: 600,
        },
        australië: {
            name: "AUSTRALIA.png",
            opacity: 50,
            width: 101,
        },
        "zuid-amerika": {
            name: "SOUTH_AMERICA.png",
            opacity: 40,
            width: 400,
        },
        "noord-amerika": {
            name: "NORTH_AMERICA.png",
            opacity: 40,
            width: 51,
        },
    };
</script>

<div id="wrapper" class="w-full h-full flex overflow-hidden">
    <div class="font-sans text-[350px] relative">
        <p class="absolute text-transparent z-10" style="background-image: url('/continents/{imageMap[data.continent].name}'); background-size: {imageMap[data.continent].width}px; opacity: .{imageMap[data.continent].opacity}">
            {data.continent}
        </p>
        <p class="absolute text-transparent" style="color: {colourMap[data.continent] ?? '#FFF'};">
            {data.continent}
        </p>
    </div>

    <div id="waves" class="bottom-0 absolute w-screen h-auto overflow-hidden">
        <svg width="1728" height="236" viewBox="0 0 1728 236" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 92.1379H60.5C156.5 122.52 83 253.876 275 215.452C467 177.028 659 37.6294 851 7.24757C1043 -24.0278 1235 53.7139 1331 92.1379L1728 134.5V236H1331C1235 236 1118.5 236 926.5 236C734.5 236 624 235.5 432 235.5C240 235.5 245 235.5 149 235.5H0.5V92.1379Z" fill="#32CBFF" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 118.379L96 98.6495C192 78.9196 384 39.4598 576 52.3601C768 66.0193 960 131.28 1152 131.28C1344 131.28 1536 66.0193 1632 32.6302L1728 0V236H1632C1536 236 1344 236 1152 236C960 236 768 236 576 236C384 236 192 236 96 236H0V118.379Z" fill="#1EB7FF" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L72 11.7025C144 22.7548 288 44.8595 432 73.4656C576 101.421 720 135.229 864 123.526C1008 112.474 1152 56.562 1296 39.6584C1440 22.7548 1584 44.8595 1656 56.562L1728 67.6143V236H1656C1584 236 1440 236 1296 236C1152 236 1008 236 864 236C720 236 576 236 432 236C288 236 144 236 72 236H0V0Z" fill="#0099FF" />
        </svg>
    </div>
</div>

<style lang="postcss">
    #wrapper {
        background: radial-gradient(50% 50% at 50% 50%, #fffeea 0%, #fffeea 35%, #b7e8eb 100%), #fff6e3;

        #waves svg {
            background-repeat: repeat-x;
        }

        div p {
            background-image: url("https://via.placeholder.com/400"); /* Replace with your image */
            background-repeat: repeat; /* Ensure the image repeats */

            /* mix-blend-mode: overlay; */

            -webkit-background-clip: text;
            background-clip: text;

            color: transparent;
        }
    }
</style>
