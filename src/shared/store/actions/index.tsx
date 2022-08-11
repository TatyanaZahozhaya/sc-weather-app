import { SharedTypes, Client, AppStore } from '@shared';

import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

const CITY_FETCHING = 'CITY_FETCHING';
const CITY_FETCHED = 'CITY_FETCHED';
const CITY_FETCHING_ERROR = 'CITY_FETCHING_ERROR';
const CITY_DELETE = 'CITY_DELETE';
const DETAILED_FORECAST_FETCHED = 'DETAILED_FORECAST_FETCHED';
const CITY_TO_UPDATE_IN_FORECAST_ADDED = 'CITY_TO_UPDATE_IN_FORECAST_ADDED';
const CITY_TO_UPDATE_HOMEPAGE_ADDED = 'CITY_TO_UPDATE_HOMEPAGE_ADDED';
const ACTIVE_FILTER_CHANGED = 'ACTIVE_FILTER_CHANGED';
const THEME_TOGGLE = 'THEME_TOGGLE';

export type ActionsType =
    | ICityFetchingAction
    | ICityFetchedAction
    | ICityFetchingErrorAction
    | ICityDeleteAction
    | IDetailedForecastFetchedAction
    | ICityToUpdateInForecastAddedAction
    | ICityToUpdateHomepageAddedAction
    | IActiveFilterChangedAction
    | IThemeToggleAction;

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

interface ICityDeleteAction {
    type: typeof CITY_DELETE;
    payload: string;
}
export const cityDelete = (name: string): ICityDeleteAction => {
    return {
        type: 'CITY_DELETE',
        payload: name,
    };
};

interface IDetailedForecastFetchedAction {
    type: typeof DETAILED_FORECAST_FETCHED;
    payload: SharedTypes.ICityForecastOutput;
}
export const detailedForecastFetched = (
    forecast: SharedTypes.ICityForecastOutput,
): IDetailedForecastFetchedAction => {
    return {
        type: 'DETAILED_FORECAST_FETCHED',
        payload: forecast,
    };
};

interface ICityToUpdateInForecastAddedAction {
    type: typeof CITY_TO_UPDATE_IN_FORECAST_ADDED;
    payload: SharedTypes.IForecastInput;
}
export const cityToUpdateInForecastAdded = (
    city: SharedTypes.IForecastInput,
): ICityToUpdateInForecastAddedAction => {
    return {
        type: 'CITY_TO_UPDATE_IN_FORECAST_ADDED',
        payload: city,
    };
};

interface ICityToUpdateHomepageAddedAction {
    type: typeof CITY_TO_UPDATE_HOMEPAGE_ADDED;
    payload: string;
}
export const cityToUpdateHomepageAdded = (cities: string): ICityToUpdateHomepageAddedAction => {
    return {
        type: 'CITY_TO_UPDATE_HOMEPAGE_ADDED',
        payload: cities,
    };
};

interface IActiveFilterChangedAction {
    type: typeof ACTIVE_FILTER_CHANGED;
    payload: string;
}
export const activeFilterChanged = (filter: string): IActiveFilterChangedAction => {
    return {
        type: 'ACTIVE_FILTER_CHANGED',
        payload: filter,
    };
};

interface IThemeToggleAction {
    type: typeof THEME_TOGGLE;
    payload: string;
}
export const themeToggle = (activeTheme: string): IThemeToggleAction => {
    return {
        type: 'THEME_TOGGLE', 
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
                dispatch(cityFetched(data));
                dispatch(cityToUpdateHomepageAdded(data.name));
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
        dispatch(cityToUpdateInForecastAdded({ city }));
        fetchForecast({ city: city })
            .then((data: SharedTypes.ICityForecastOutput) => {
                dispatch(detailedForecastFetched(data));
            })
            .catch(() => dispatch(cityFetchingError()));
    };

