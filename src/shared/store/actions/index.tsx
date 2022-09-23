import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { SharedTypes, Client, AppStore } from '@shared';

const CITY_FETCHING = 'CITY_FETCHING';
const CITY_FETCHED = 'CITY_FETCHED';
const CITY_FETCHING_ERROR = 'CITY_FETCHING_ERROR';
const DELETE_CITY = 'DELETE_CITY';
const FETCH_DETAILED_FORECAST = 'FETCH_DETAILED_FORECAST';
const ADD_CITY_TO_UPDATE_IN_FORECAST = 'ADD_CITY_TO_UPDATE_IN_FORECAST';
const ADD_CITY_TO_UPDATE_CITY_LIST = 'ADD_CITY_TO_UPDATE_CITY_LIST';
const CHANGE_ACTIVE_FILTER = 'CHANGE_ACTIVE_FILTER';
const TOGGLE_THEME = 'TOGGLE_THEME';

export type ActionsType =
    | ICityFetchingAction
    | ICityFetchedAction
    | ICityFetchingErrorAction
    | IDeleteCityAction
    | IFetchDetailedForecastAction
    | IAddCityToUpdateInForecastAction
    | IAddCityToUpdateCityListAction
    | IChangeActiveFilterdAction
    | IToggleThemeAction;

interface ICityFetchingAction {
    type: typeof CITY_FETCHING;
}
export const cityFetching = (): ICityFetchingAction => {
    return {
        type: 'CITY_FETCHING',
    };
};

interface ICityFetchedAction {
    type: typeof CITY_FETCHED;
    payload: SharedTypes.ICityData;
}
export const cityFetched = (cities: SharedTypes.ICityData): ICityFetchedAction => {
    return {
        type: 'CITY_FETCHED',
        payload: cities,
    };
};

interface ICityFetchingErrorAction {
    type: typeof CITY_FETCHING_ERROR;
}
export const cityFetchingError = (): ICityFetchingErrorAction => {
    return {
        type: 'CITY_FETCHING_ERROR',
    };
};

interface IDeleteCityAction {
    type: typeof DELETE_CITY;
    payload: string;
}
export const deleteCity = (name: string): IDeleteCityAction => {
    return {
        type: 'DELETE_CITY',
        payload: name,
    };
};

interface IFetchDetailedForecastAction {
    type: typeof FETCH_DETAILED_FORECAST;
    payload: SharedTypes.ICityForecastOutput;
}
export const fetchDetailedForecast = (
    forecast: SharedTypes.ICityForecastOutput,
): IFetchDetailedForecastAction => {
    return {
        type: 'FETCH_DETAILED_FORECAST',
        payload: forecast,
    };
};

interface IAddCityToUpdateInForecastAction {
    type: typeof ADD_CITY_TO_UPDATE_IN_FORECAST;
    payload: SharedTypes.IForecastInput;
}
export const addCityToUpdateInForecast = (
    city: SharedTypes.IForecastInput,
): IAddCityToUpdateInForecastAction => {
    return {
        type: 'ADD_CITY_TO_UPDATE_IN_FORECAST',
        payload: city,
    };
};

interface IAddCityToUpdateCityListAction {
    type: typeof ADD_CITY_TO_UPDATE_CITY_LIST;
    payload: string;
}
export const addCityToUpdateCityList = (cities: string): IAddCityToUpdateCityListAction => {
    return {
        type: 'ADD_CITY_TO_UPDATE_CITY_LIST',
        payload: cities,
    };
};

interface IChangeActiveFilterdAction {
    type: typeof CHANGE_ACTIVE_FILTER;
    payload: string;
}
export const changeActiveFilter = (filter: string): IChangeActiveFilterdAction => {
    return {
        type: 'CHANGE_ACTIVE_FILTER',
        payload: filter,
    };
};

interface IToggleThemeAction {
    type: typeof TOGGLE_THEME;
    payload: string;
}
export const toggleTheme = (activeTheme: string): IToggleThemeAction => {
    return {
        type: 'TOGGLE_THEME', 
        payload: activeTheme,
    }
}

//thunk
export const getCityData =
    ({ city }: SharedTypes.ICityInput): ThunkAction<void, AppStore.IState, unknown, AnyAction> =>
    (dispatch) => {
        const { fetchCity } = Client;
        dispatch(cityFetching());
        fetchCity({ city: city }) 
            .then((data: SharedTypes.ICityData) => {
                if (!data.id) {
                    dispatch(cityFetchingError())
                }
                dispatch(cityFetched(data));
                dispatch(addCityToUpdateCityList(data.name));
            })
            .catch(() => dispatch(cityFetchingError()));
    };

export const updateCityData =
    ({ city }: SharedTypes.ICityInput): ThunkAction<void, AppStore.IState, unknown, AnyAction> =>
    (dispatch) => {
        const { fetchCity } = Client;
        dispatch(cityFetching());
        fetchCity({ city: city })
            .then((data: SharedTypes.ICityData) => {
                dispatch(cityFetched(data));
            })
            .catch(() => dispatch(cityFetchingError()));
    };

export const fetchCityDetailedForecast =
    ({
        city,
    }: SharedTypes.IForecastInput): ThunkAction<void, AppStore.IState, unknown, AnyAction> =>
    (dispatch) => {
        const { fetchForecast } = Client;
        dispatch(cityFetching());
        dispatch(addCityToUpdateInForecast({ city }));
        fetchForecast({ city: city })
            .then((data: SharedTypes.ICityForecastOutput) => {
                dispatch(fetchDetailedForecast(data));
            })
            .catch(() => dispatch(cityFetchingError()));
    };
