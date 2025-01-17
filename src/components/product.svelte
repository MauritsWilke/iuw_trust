<script lang="ts">
    import type { InventoryData } from "$lib/types";

    let { ProductData }: { ProductData: InventoryData } = $props();
</script>

<h1>{ProductData.Naam}</h1>
<p>Land: {ProductData.Land}</p>
<p>Prijs: {ProductData.Prijs}</p>
<p class="pl-1">{ProductData.Omschrijving}</p>
