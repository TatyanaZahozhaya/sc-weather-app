import { SharedComponents } from '@shared';

import { ForecastSeveralDaysHeader } from './forecast_several_days_header';
import { DataTable } from './data_table';

export const ForecastSeveralDays = () => {
    return (
        <SharedComponents.MainPartContainer as="main">
            <ForecastSeveralDaysHeader />
            <DataTable />
        </SharedComponents.MainPartContainer>
    );
};
