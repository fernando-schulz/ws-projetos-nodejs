const conversionRates = require("../../models/conversionRates");

function convertCurrency(amount, fromCurrency, toCurrency) {
    if (!conversionRates[fromCurrency] || !conversionRates[toCurrency]) {
        throw new Error('Moeda Inválida');
    }

    const mountOriginCurrency = amount / conversionRates[fromCurrency];
    const converted = mountOriginCurrency * conversionRates[toCurrency];

    return {
        fromCurrency,
        toCurrency,
        amount,
        converted
    };
}

module.exports = {
    convertCurrency
}