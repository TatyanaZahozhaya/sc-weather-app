import axios from 'axios';

import { SharedTypes } from '@shared';

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org',
    params: {
        appid: process.env.REACT_APP_API_KEY,
    },
});

export class _ClientAxios {
    onResponse = async (url: string) => {
        return await instance.get(url).then((response) => response.data);
    };

    fetchCityGeoAxios = ({
        city,
        limit = 1,
    }: SharedTypes.ICityGeoInput): Promise<SharedTypes.ICityGeoOutput> => {
        return this.onResponse(`/geo/1.0/direct?q=${city}&limit=${limit}`);
    };

    fetchCityDataAxios = ({
        lat,
        lon,
    }: SharedTypes.ICityDataInput): Promise<SharedTypes.ICityDataOutput> => {
        return this.onResponse(`/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`);
    };

    fetchCityForecastAxios = ({lat, lon}: SharedTypes.ICityForecastInput): Promise<SharedTypes.ICityForecastOutput> => {
        return this.onResponse(`/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`)
    };

    fetchCityAxios = async ({ city }: SharedTypes.ICityInput): Promise<SharedTypes.ICityData> => {
        const coord = await this.fetchCityGeoAxios({ city });
        const { lat, lon } = coord[0];
        return await this.fetchCityDataAxios({ lat, lon });
    };

    fetchForecastAxios = async ({ city }: SharedTypes.IForecastInput): Promise<SharedTypes.IForecastOutput> => {
        const coord = await this.fetchCityGeoAxios({ city });
        const { lat, lon } = coord[0];
        return await this.fetchCityForecastAxios({ lat, lon });
    };
}

export const ClientAxios = new _ClientAxios();
