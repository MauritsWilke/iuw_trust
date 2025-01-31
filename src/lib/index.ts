export function formatPrice(price: number) {
    // 20.000.000.000,-
    const suffix = ",-"
    const locale = price.toLocaleString().replaceAll(",", ".");

    return locale + suffix;
}