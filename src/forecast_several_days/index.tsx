import { ForecastSeveralDaysHeader } from './forecast_several_days_header';
import { DataTable } from './data_table';

import { SharedComponents } from '@shared';

export const ForecastSeveralDays = () => {
    return (
        <SharedComponents.MainPartContainer as="main">
            <ForecastSeveralDaysHeader />
            <DataTable />
        </SharedComponents.MainPartContainer>
    );
};
