export function formatPrice(price: number) {
    const formatted = new Intl.NumberFormat('nl-NL', { style: "currency", currency: "EUR" }).format(
        price
    ).slice(2)
        .replace(",00", ",-")

    const suffix = ",-"
    const locale = price.toLocaleString().replaceAll(",", ".");

    // console.log(formatted)

    return formatted;
}