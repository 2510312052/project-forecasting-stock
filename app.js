const express = require('express');
const app = express();
const path = require('path');

const sequelize = require('./models/db');
require('./models/Product');
require('./models/Sales');

const ForecastService = require('./services/forecastService');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

// Fungsi bantu aman
function safeForecast(data) {
    let f = ForecastService.movingAverage(data, 3);
    if (!Array.isArray(f)) return [];
    return f;
}

// HOME
app.get('/', (req, res) => {
    res.render('index', { title: 'Aplikasi Forecasting Stok' });
});

// HALAMAN INPUT + FORECASTING
app.get('/input', async (req, res) => {
    const Sales = require('./models/Sales');
    const data = await Sales.findAll({ order: [['id', 'ASC']], raw: true });

    const forecast = safeForecast(data);
    const trend = data.length > 0 ? ForecastService.trend(data) : [];

    const recommendation = forecast.map((f, i) => {
        if (f === null) return '-';
        const diff = f - data[i].quantity;

        // Toleransi ±1
        if (Math.abs(diff) < 1) return 'Stabil';
        else if (diff > 0) return `Tambah stok ${Math.round(diff)}`;
        else return `Kurangi stok ${Math.round(-diff)}`;
    });

    res.render('form', { title: 'Input Data Penjualan & Forecasting', data, forecast, trend, recommendation });
});

// SUBMIT FORM
app.post('/input', async (req, res) => {
    const Sales = require('./models/Sales');
    const { quantity, month } = req.body;

    await Sales.create({ quantity: Number(quantity), month });
    res.redirect('/input');
});

// RESET DATA
app.post('/reset', async (req, res) => {
    const Sales = require('./models/Sales');
    await Sales.destroy({ where: {} });
    res.redirect('/input');
});

// START SERVER
sequelize.sync().then(() => {
    console.log('Database siap dipakai');
    app.listen(3000, () => console.log('Server running di http://localhost:3000'));
});
