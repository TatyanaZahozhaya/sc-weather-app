import { ActionsType } from '../../actions';
import { SharedTypes } from '@shared';

export interface IState {
    cityInformation: Array<SharedTypes.ICityData>;
    loading: boolean;
    error: boolean;
    detailedForecast: SharedTypes.ICityForecastOutput;
    cityToUpdateInForecast: SharedTypes.IForecastInput;
    cityToUpdateHomepage: Array<string>;
}

const initialState: IState = {
    cityInformation: [],
    loading: false,
    error: false,
    detailedForecast: {} as SharedTypes.ICityForecastOutput,
    cityToUpdateInForecast: {} as SharedTypes.IForecastInput,
    cityToUpdateHomepage: [] ,
};

export const cityReducer = (state: IState = initialState, action: ActionsType): IState => {
    switch (action.type) {
        case 'CITY_FETCHING':
            return {
                ...state,
                loading: true,
            };
        case 'CITY_FETCHED':
            return {
                ...state,
                cityInformation: [
                    ...state.cityInformation.filter((item) => item.id !== action.payload.id),
                    action.payload,
                ],
                loading: false,
            };
        case 'CITY_FETCHING_ERROR':
            return {
                ...state,
                error: true,
            };

        case 'CITY_DELETE':
            return {
                ...state,
                cityInformation: state.cityInformation.filter(
                    (item) => item.name !== action.payload,
                ),
                cityToUpdateHomepage: state.cityToUpdateHomepage.filter(
                    (item) => item !== action.payload,
                ),
            };
        case 'DETAILED_FORECAST_FETCHED':
            return {
                ...state,
                detailedForecast: action.payload,
                loading: false,
            };
        case 'CITY_TO_UPDATE_IN_FORECAST_ADDED':
            return {
                ...state,
                cityToUpdateInForecast: action.payload,
                loading: false,
            };
        case 'CITY_TO_UPDATE_HOMEPAGE_ADDED':
            return {
                ...state,
                cityToUpdateHomepage: [
                    ...state.cityToUpdateHomepage.filter((item) => item !== action.payload),
                    action.payload,
                ],
            };
        default:
            return state;
    }
};

