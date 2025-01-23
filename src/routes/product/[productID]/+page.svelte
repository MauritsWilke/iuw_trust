<script lang="ts">
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();

    console.log(data.product.Naam);
</script>

<div id="wrapper">
    <div id="images">
        <img src="/products/" />
    </div>
</div>
