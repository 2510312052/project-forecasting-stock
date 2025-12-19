const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Product = require('./Product');

const Sales = sequelize.define('Sales', {
    month: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Product.hasMany(Sales);
Sales.belongsTo(Product);

module.exports = Sales;
