import { SharedComponents } from '@shared';

import { ForecastTodayHeader } from './forecast_today_header';
import { ForecastTable } from './forecast_table';

export const ForecastToday = () => {
    return (
        <SharedComponents.MainPartContainer as="main">
            <ForecastTodayHeader />
            <ForecastTable />
        </SharedComponents.MainPartContainer>
    );
};
