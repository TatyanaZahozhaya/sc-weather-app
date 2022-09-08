import { ActionsType } from '../../actions';
import { detailedForecastInitialState, cityToUpdateHomepageInitialState } from './initial_state_elements';

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
    detailedForecast: detailedForecastInitialState,
    cityToUpdateInForecast: cityToUpdateHomepageInitialState,
    cityToUpdateHomepage: [] ,
};

export const cityReducer = (state: IState = initialState, action: ActionsType): IState => {
    switch (action.type) {
        case 'CITY_FETCHING':
            return {
                ...state,
                loading: true,
                error: false,
            };
        case 'CITY_FETCHED':
            return {
                ...state,
                cityInformation: [
                    ...state.cityInformation.filter((item) => item.id !== action.payload.id),
                    action.payload,
                ],
                loading: false,
                error: false,
            };
        case 'CITY_FETCHING_ERROR':
            return {
                ...state,
                error: true,
                loading: false,
            };

        case 'DELETE_CITY':
            return {
                ...state,
                cityInformation: state.cityInformation.filter(
                    (item) => item.name !== action.payload,
                ),
                cityToUpdateHomepage: state.cityToUpdateHomepage.filter(
                    (item) => item !== action.payload,
                ),
            };
        case 'FETCH_DETAILED_FORECAST':
            return {
                ...state,
                detailedForecast: action.payload,
                loading: false,
                error: false,
            };
        case 'ADD_CITY_TO_UPDATE_IN_FORECAST':
            return {
                ...state,
                cityToUpdateInForecast: action.payload,
                loading: false,
                error: false,
            };
        case 'ADD_CITY_TO_UPDATE_CITY_LIST':
            return {
                ...state,
                cityToUpdateHomepage: [
                    ...state.cityToUpdateHomepage.filter((item) => item !== action.payload),
                    action.payload,
                ],
                loading: false,
                error: false,
            };
        default:
            return state;
    }
};

