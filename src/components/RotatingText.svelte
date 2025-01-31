<script lang="ts">
    type Props = {
        text: string;
        iconURL: string;
        radius?: number;
        textSize?: number;
        iconSizePercentage?: number;
    };
    const { text, iconURL, radius = 47, textSize = 16, iconSizePercentage = 0.55 }: Props = $props();

    // THESE ARE UTIL VARIABLES, DO NOT MANUALLY EDIT
    const WH = 2 * radius + textSize * 2;
    const iconWH = iconSizePercentage * WH;
</script>

<svg width={WH} height={WH} viewBox="0 0 {WH} {WH}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <image href={iconURL} x={(WH - iconWH) / 2} y={(WH - iconWH) / 2} width={iconWH} height={iconWH} />

    <path
        id="curve"
        class="fill: none;"
        d="
            M {WH / 2} {WH / 2}
            m {radius}, 0
            a {radius},{radius} 0 1,1 {-(radius * 2)},0
            a {radius},{radius} 0 1,1  {radius * 2},0
        "
    />
    <g id="rotate">
        <text width={WH}>
            <textPath id="text" xlink:href="#curve" fill="#063e2a" class="font-size: {textSize}">{text}</textPath>
        </text>
    </g>
</svg>

<style lang="postcss">
    svg #rotate {
        animation-name: rotate-circle;
        animation-duration: 15s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        transform-origin: center;
    }

    #text {
        @apply font-bold font-serif;
    }

    @keyframes rotate-circle {
        to {
            transform: rotate(1turn);
        }
    }
</style>
