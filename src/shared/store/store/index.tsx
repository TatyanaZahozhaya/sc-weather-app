import {
    applyMiddleware,
    legacy_createStore as createStore,
    combineReducers,
    compose,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AppStore } from '@shared';
import { cityReducer, themeReducer, filterReducer } from '../reducers';

const cityPersistConfig = {
    key: 'city',
    storage,
    blacklist: ['cityInformation', 'loading', 'error'],
};

const themePersistConfig = {
    key: 'theme',
    storage,
    whitelist: ['activeTheme'],
};

export interface IAppState {
    city: AppStore.IState;
    filter: AppStore.IFilterState;
    theme: AppStore.IThemeState;
}

const rootReducer = combineReducers({
    city: persistReducer(cityPersistConfig, cityReducer),
    filter: filterReducer,
    theme: persistReducer(themePersistConfig, themeReducer),
});

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(ReduxThunk), (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()),
);
export const persistor = persistStore(store);
