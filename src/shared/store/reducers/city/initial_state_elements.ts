export const detailedForecastInitialState = {
    city: {
        id: 0,
        name: '',
        coord: {
            lat: 0,
            lon: 0,
        },
        country: '',
        population: 0,
        sunrise: 0,
        sunset: 0,
        timezone: 0,
    },
    cnt: 0,
    cod:'',
    message: 0,
    list: [],
}

export const cityToUpdateHomepageInitialState = {
    city: '',
}