const Sales = require('./models/Sales');
const sequelize = require('./models/db');

(async () => {
    await sequelize.sync();

    await Sales.create({ product_id: 1, month: '2025-01', quantity: 10 });
    await Sales.create({ product_id: 1, month: '2025-02', quantity: 12 });
    await Sales.create({ product_id: 1, month: '2025-03', quantity: 15 });
    await Sales.create({ product_id: 1, month: '2025-04', quantity: 14 });

    console.log('Data penjualan masuk');
    process.exit();
})();
