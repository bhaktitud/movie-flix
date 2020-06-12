export default function currencyFormatter (curr) {
    let cents = 100
    let formattedCurrency = (curr/cents).toFixed(2)

    return `$${formattedCurrency}`
}