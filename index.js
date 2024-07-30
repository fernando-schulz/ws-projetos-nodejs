const express = require('express');
const currencies = require('./app/models/currencies');
const { convertCurrency } = require('./app/services/currencyConverter/convertCurrency');
const app = express();
const port = 3210;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor rodando normalmente!');
});

app.get('/currencies', (req, res) => {
    res.json(currencies);
});

app.post('/convert', (req, res) => {
    const { fromCurrency, toCurrency, amount } = req.body;

    if (!fromCurrency || !toCurrency || !amount) {
        return res.status(400).json({ error: 'Parâmetros "from", "to" e "amount" são obrigatórios.' });
    }

    try {
        const result = convertCurrency(amount, fromCurrency, toCurrency);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});