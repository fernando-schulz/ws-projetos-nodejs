const conversionRates = require("../../models/conversionRates");

function convertCurrency(amount, fromCurrency, toCurrency) {
    if (!conversionRates[fromCurrency] || !conversionRates[toCurrency]) {
        throw new Error('Moeda Inválida');
    }

    const montanteMoedaOrigem = amount / conversionRates[fromCurrency];
    const montanteMoedaDestino = montanteMoedaOrigem * conversionRates[toCurrency];

    return {
        fromCurrency,
        toCurrency,
        amount,
        montanteMoedaDestino
    };
}

module.exports = {
    convertCurrency
}