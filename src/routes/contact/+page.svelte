<script>
    import Footer from "components/footer.svelte";
</script>

<div id="wrapper" class=" font-serif px-[70px] py-[80px] max-w-[75ch] text-teal">
    <h1>Contactgegevens</h1>
    <p>Bij vragen over deze verklaring of uw privacyrechten kunt u contact met ons opnemen via:</p>
    <span>
        <pre>📧&#x09;info@meerenzo.nl</pre>
        <pre>📍&#x09;Meer & Zo B.V.</pre>
        <pre>&#x09;&#x09;Waterstraat 12</pre>
        <pre>&#x09;&#x09;1012 AB</pre>
        <pre>&#x09;&#x09;Amsterdam</pre>
        <pre>📞 +31 20 123 456</pre>
    </span>

    <p class="mt-2">Wij zijn 24/7 te bereiken.</p>
</div>
<div class="absolute bottom-0">
    <Footer />
</div>

<style lang="postcss">
    h1 {
        @apply uppercase text-teal text-[32px] font-bold mb-4;
    }

    p {
        @apply mb-2 ml-2;
    }

    pre {
        @apply font-serif;
    }
</style>
