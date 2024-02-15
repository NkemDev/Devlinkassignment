//A currency exchange app
// Example function to convert currency
function convertCurrency(amount, fromCurrency, toCurrency) {
    // Hardcoded exchange rates (for example purposes)
    const exchangeRates = {
        'USD': { 'EUR': 0.88, 'GBP': 0.78, 'JPY': 109.75, 'NGN':1515.63 },
        'EUR': { 'USD': 1.14, 'GBP': 0.89, 'JPY': 122.62,'NGN':1627.22},
        'GBP': { 'USD': 1.29, 'EUR': 1.12, 'JPY': 141.09, 'NGN':1902.07 },
        'JPY': { 'USD': 0.0091, 'EUR': 0.0082, 'GBP': 0.0071, 'NGN':10.10},
        'NGN': { 'USD': 0.00066, 'EUR': 0.00061, 'GBP':  0.00053, 'JPY': 0.09902}
    };

    // Check if the currencies are supported
    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
        return "Unsupported currency pair.";
    }

    // Perform the conversion
    const exchangeRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * exchangeRate;

    return convertedAmount;
}


const amount = 1000; // Amount to convert
const fromCurrency = 'USD'; // Currency to convert from
const toCurrency = 'NGN'; // Currency to convert to

const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`);
