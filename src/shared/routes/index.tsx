import { SharedTypes } from '..';

import { Home } from '@home';
import { ForecastToday } from '@forecast_today';
import { ForecastSeveralDays } from '@forecast_several_days';
import { PageNotFound } from '@page_not_found';

export enum Paths {
    HOME = '/',
    FORECAST_TODAY = '/forecast_today',
    FORECAST_SEVERAL_DAYS = '/forecast_several_days',
    PAGE_NOT_FOUND = '*',
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
        element: <ForecastSeveralDays />,
        path: Paths.FORECAST_SEVERAL_DAYS,
    },
    {
        element: <PageNotFound />,
        path: Paths.PAGE_NOT_FOUND,
    },
];
