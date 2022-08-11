import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import App from './App';
import { AppStore } from '@shared';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <PersistGate
            loading={null}
            persistor={AppStore.persistor}>
            <ReduxProvider store={AppStore.store}>
                <App />
            </ReduxProvider>
        </PersistGate>
    </React.StrictMode>,
);

reportWebVitals();
