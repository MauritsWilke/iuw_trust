<script>
    import Footer from "components/footer.svelte";
</script>

<div id="wrapper" class="w-full h-full font-serif px-[70px] py-[80px] max-w-[75ch]">
    <h1>Privacy- en Veiligheidsverklaring</h1>

    <h2>1. Inleiding</h2>
    <p>Wij hechten grote waarde aan de bescherming van uw privacy en de veiligheid van uw gegevens. In deze verklaring leggen wij uit hoe wij omgaan met persoonsgegevens, welke maatregelen wij nemen om uw informatie te beschermen en wat onze aansprakelijkheidsbeperkingen zijn.</p>

    <h2>2. Verzameling en Gebruik van Gegevens</h2>
    <p>Wij verzamelen en verwerken alleen persoonsgegevens die noodzakelijk zijn voor het leveren van onze diensten. Dit kan onder andere omvatten:</p>

    <ul class="list-disc pb-2">
        <li>Naam, e-mailadres en contactgegevens</li>
        <li>Gebruikersactiviteit op onze website of platform</li>
        <li>Technische informatie zoals IP-adressen en browserinstellingen</li>
    </ul>

    <p>Uw gegevens worden uitsluitend gebruikt voor legitieme doeleinden, zoals het verbeteren van onze diensten, communicatie met gebruikers en naleving van wettelijke verplichtingen. Wij verkopen of delen uw gegevens niet met derden, tenzij dit noodzakelijk is voor het functioneren van onze diensten of wettelijk verplicht is.</p>

    <h2>3. Beveiligingsmaatregelen</h2>
    <p>Wij nemen redelijke technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies, misbruik, ongeautoriseerde toegang en openbaarmaking. Deze maatregelen omvatten onder andere:</p>

    <ul class="list-disc pb-2">
        <li>Versleuteling van gevoelige gegevens</li>
        <li>Beperkte toegang tot persoonsgegevens voor uitsluitend geautoriseerd personeel</li>
        <li>Regelmatige updates en beveiligingscontroles van onze systemen</li>
    </ul>

    <p>Hoewel wij er alles aan doen om uw gegevens te beschermen, kunnen wij geen absolute garantie geven tegen beveiligingsinbreuken.</p>

    <h2>4. Aansprakelijkheidsbeperking</h2>
    <p>Wij spannen ons in om een veilige en betrouwbare dienst te bieden, maar wij kunnen niet aansprakelijk worden gesteld voor: Het gebruik van onze diensten is op eigen risico. Wij adviseren gebruikers om zelf passende voorzorgsmaatregelen te nemen, zoals het gebruik van sterke wachtwoorden en up-to-date beveiligingssoftware.</p>
    <ul class="list-disc pb-2">
        <li>Onopzettelijke beveiligingsinbreuken door derden (zoals hackers of malware)</li>
        <li>Verlies of schade als gevolg van technische storingen, menselijke fouten of andere onvoorziene omstandigheden</li>
        <li>Eventuele schade voortvloeiend uit het gebruik van onze website of diensten, inclusief verlies van gegevens of financiële schade</li>
    </ul>

    <h2>5. Wijzigingen in deze Verklaring</h2>
    <p>Wij behouden ons het recht voor om deze privacy- en veiligheidsverklaring op elk moment te wijzigen. Wij raden u aan deze verklaring regelmatig te raadplegen om op de hoogte te blijven van eventuele wijzigingen.</p>

    <h2>6. Contactgegevens</h2>
    <p>Bij vragen over deze verklaring of uw privacyrechten kunt u contact met ons opnemen via:</p>
    <span class="pb-2">
        <pre>📧&#x09;info@meerenzo.nl</pre>
        <pre>📍&#x09;Meer & Zo B.V.</pre>
        <pre>&#x09;&#x09;Waterstraat 12</pre>
        <pre>&#x09;&#x09;1012 AB</pre>
        <pre>&#x09;&#x09;Amsterdam</pre>
        <pre>📞 +31 20 123 456</pre>
    </span>
</div>

<style lang="postcss">
    h1 {
        @apply uppercase text-teal text-[32px] font-bold mb-4;
    }

    h2 {
        @apply text-teal text-[20px] font-medium mb-1;
    }

    p {
        @apply mb-2 ml-2;
    }

    pre {
        @apply font-serif;
    }

    ul {
        @apply ml-6;
    }
</style>
