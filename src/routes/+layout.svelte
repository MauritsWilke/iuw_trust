<script lang="ts">
    import Navbar from "components/navbar.svelte";

    import "../app.css";
    let { children } = $props();
</script>

<div class="flex flex-col h-screen w-screen bg-off-white">
    <Navbar />

    <div class="flex-1 bg-gray-100 overflow-hidden">
        {@render children()}
    </div>
</div>
