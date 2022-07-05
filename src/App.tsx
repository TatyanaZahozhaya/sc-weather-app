import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppRoutes, SharedTypes, SharedComponents } from '@shared';

const renderRoutes = ({ element, path }: SharedTypes.IRoute) => {
    return (
        <Route
            element={element}
            path={path}
            key={path}
        />
    );
};


function App() {

    return (
        <SharedComponents.AppContainer >
            <SharedComponents.AppHeader  />
            <Router>
                <Routes>{AppRoutes.map(renderRoutes)}</Routes>
            </Router>
        </SharedComponents.AppContainer>
    );
}

export default App;
