<script lang="ts">
    import Navbar from "components/navbar.svelte";

    import "../app.css";
    let { children } = $props();
</script>

<svelte:head>
    <title>Meer & Zo</title>
</svelte:head>

<div class="flex flex-col h-screen w-screen bg-off-white overflow-x-hidden">
    <Navbar />

    <div class="flex-1 bg-gray-100 overflow-x-hidden">
        {@render children()}
    </div>
</div>
