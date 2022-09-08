import { ForecastTodayHeader } from './forecast_today_header';
import { ForecastTable } from './forecast_table';

export const ForecastToday = () => {
    return (
        <div>
            <ForecastTodayHeader />
            <ForecastTable />
        </div>
    );
};
