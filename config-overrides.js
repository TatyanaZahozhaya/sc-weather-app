const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            '@home': path.resolve(__dirname, 'src/home'),
            '@forecast_today': path.resolve(__dirname, 'src/forecast_today'),
            '@forecast_3_days': path.resolve(__dirname, 'src/forecast_3_days'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        },
    };

    return config;
};
