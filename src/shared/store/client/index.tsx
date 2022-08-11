import { SharedTypes } from '@shared';

export class _Client {
    baseUrl: string | undefined;
    token: string;

    constructor({ baseUrl, token }: SharedTypes.IApiClientParams) {
        if (!token) {
            throw new Error('Api client token is not defined');
        }
        this.baseUrl = baseUrl;
        this.token = token;
    }

    fetchCityGeo = async ({
        city,
        limit = 1,
    }: SharedTypes.ICityGeoInput): Promise<SharedTypes.ICityGeoOutput> => {
        const cityGeo = await fetch(
            `${this.baseUrl}/geo/1.0/direct?q=${city}&limit=${limit}&appid=${this.token}`,
        );
        return await cityGeo.json();
    };

    fetchCityData = async ({
        lat,
        lon,
    }: SharedTypes.ICityDataInput): Promise<SharedTypes.ICityDataOutput> => {
        const cityData = await fetch(
            `${this.baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.token}&units=metric`,
        );
        return await cityData.json();
    };

    fetchCityForecast = async ({
        lat,
        lon,
    }: SharedTypes.ICityForecastInput): Promise<SharedTypes.ICityForecastOutput> => {
        const cityData = await fetch(
            `${this.baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=25&appid=${this.token}&units=metric`,
        );
        return await cityData.json();
    };

    fetchCity = async ({ city }: SharedTypes.ICityInput): Promise<SharedTypes.ICityData> => {
        const coord = await this.fetchCityGeo({ city });
        if (!coord[0]) {
            alert('city not found. check the spelling');
        }
        const { lat, lon } = coord[0];
        return await this.fetchCityData({ lat, lon });
    };

    fetchForecast = async ({
        city,
    }: SharedTypes.IForecastInput): Promise<SharedTypes.IForecastOutput> => {
        const coord = await this.fetchCityGeo({ city });
        const { lat, lon } = coord[0];
        return await this.fetchCityForecast({ lat, lon });
    };
}

export const Client = new _Client({
    baseUrl: 'http://api.openweathermap.org',
    token: process.env.REACT_APP_API_KEY,
});
