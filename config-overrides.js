const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            '@home': path.resolve(__dirname, 'src/home'),
            '@forecast_today': path.resolve(__dirname, 'src/forecast_today'),
            '@forecast_several_days': path.resolve(__dirname, 'src/forecast_several_days'),
            '@page_not_found': path.resolve(__dirname, 'src/page_not_found'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        },
    };

    return config;
};
