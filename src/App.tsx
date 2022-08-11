import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'urql';

import { AppRoutes, SharedTypes, SharedComponents, ClientGraphQL, AppStore, Theme } from '@shared';

const renderRoutes = ({ element, path }: SharedTypes.IRoute): React.ReactElement => {
    return (
        <Route
            element={element}
            path={path}
            key={path}
        />
    );
};

function App() {
    const { activeTheme } = useSelector((state: AppStore.IAppState) => state.theme);

    const [theme, setTheme] = useState(Theme.light);

    useEffect (() => {
        if (activeTheme === 'dark') {
            setTheme(Theme.dark)
        } else {
            setTheme(Theme.light)
        }
    }, [activeTheme])


    return (
        <>
                <ThemeProvider theme={theme}>
                    <SharedComponents.GlobalStyle />
                    <SharedComponents.AppContainer>
                        <Provider value={ClientGraphQL}>
                            <SharedComponents.AppHeader />
                            <Router>
                                <Routes>{AppRoutes.map(renderRoutes)}</Routes>
                            </Router>
                        </Provider>
                    </SharedComponents.AppContainer>
                </ThemeProvider>
        </>
    );
}

export default App;
