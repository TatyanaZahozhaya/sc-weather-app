import { SharedTypes } from '..';

import { Home } from '@home';
import { ForecastToday } from '@forecast_today';
import { Forecast3Days } from '@forecast_3_days';

export enum Paths {
    HOME = '/',
    FORECAST_TODAY = '/forecast_today',
    FORECAST_3_DAYS = '/forecast_3_days',
}

export const AppRoutes: Array<SharedTypes.IRoute> = [
    {
        element: <Home />,
        path: Paths.HOME,
    },
    {
        element: <ForecastToday />,
        path: Paths.FORECAST_TODAY,
    },
    {
        element: <Forecast3Days />,
        path: Paths.FORECAST_3_DAYS,
    },
];
