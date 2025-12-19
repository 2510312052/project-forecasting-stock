class BaseForecast {
    calculate(data) {
        throw new Error('Method harus di-override');
    }
}

module.exports = BaseForecast;
