import { SharedComponents } from '@shared';

const renderTableColumns = (item: string) => {
    return (
        <SharedComponents.Text
            text={item}
            key={item}
            textAlign={'center'}
        />
    );
};

// homepage
const HomepageTableColumns = [
    'City',
    'Now',
    'Current data',
    'Forecast for',
    'Remove from list',
];
export const HomepageTableHeader = () => {
    return (
        <SharedComponents.HomepageTableHeaderContainer>
            {HomepageTableColumns.map(renderTableColumns)}
        </SharedComponents.HomepageTableHeaderContainer>
    );
};

// today detailed information
const TableLine1 = ['Feels like, Celsius', 'Atmospheric pressure, hPa', 'Humidity, %'];
const TableLine2 = ['Visibility, meter', 'Wind speed, meter/sec', 'Wind gust, meter/sec'];
const TableLine3 = ['Cloudiness, %', 'Sunrise time', 'Sunset time'];

export const Line1TableHeader = () => {
    return (
        <SharedComponents.TodayTableHeaderContainer>
            {TableLine1.map(renderTableColumns)}
        </SharedComponents.TodayTableHeaderContainer>
    );
};

export const Line2TableHeader = () => {
    return (
        <SharedComponents.TodayTableHeaderContainer>
            {TableLine2.map(renderTableColumns)}
        </SharedComponents.TodayTableHeaderContainer>
    );
};

export const Line3TableHeader = () => {
    return (
        <SharedComponents.TodayTableHeaderContainer>
            {TableLine3.map(renderTableColumns)}
        </SharedComponents.TodayTableHeaderContainer>
    );
};

// forecast for 3 days
const TableColumns = [
    'Date',
    '',
    'Temperature, Celsius',
    'Wind speed, meter/sec',
    'Probability of precipitation',
    'Average visibility, metres',
];

export const ForecastTableHeader = () => {
    return (
        <SharedComponents.ForecastTableHeaderContainer>
            {TableColumns.map(renderTableColumns)}
        </SharedComponents.ForecastTableHeaderContainer>
    );
};
