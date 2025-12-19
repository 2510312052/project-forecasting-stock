// services/forecastService.js

module.exports = {
    movingAverage: function (data, period = 3) {
        let result = [];
        for (let i = 0; i < data.length; i++) {
            if (i + 1 < period) {
                result.push(null); // belum cukup data
            } else {
                let sum = 0;
                for (let j = i - period + 1; j <= i; j++) {
                    sum += Number(data[j].quantity);
                }
                result.push(sum / period);
            }
        }
        return result;
    },

    trend: function (data) {
        // Trend sederhana: naik/turun dari bulan sebelumnya
        let result = [];
        for (let i = 0; i < data.length; i++) {
            if (i === 0) result.push('-');
            else if (data[i].quantity > data[i - 1].quantity) result.push('Naik');
            else if (data[i].quantity < data[i - 1].quantity) result.push('Turun');
            else result.push('Stabil');
        }
        return result;
    }
};
