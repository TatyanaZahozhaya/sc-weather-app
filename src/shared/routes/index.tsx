import { SharedTypes } from '..';

import { Home } from '@home';
import { ForecastToday } from '@forecast_today';
import { Forecast5Days } from '@forecast_5_days';

export enum Paths {
    HOME = '/',
    FORECAST_TODAY = '/forecast_today',
    FORECAST_5_DAYS = '/forecast_5_days',
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
        element: <Forecast5Days />,
        path: Paths.FORECAST_5_DAYS,
    },
]
