import { useSelector } from 'react-redux';

import { Theme, SharedComponents, AppStore } from '@shared';

export const ForecastHeader = () => {
    const {
        palette: { primaryFontColor },
    } = Theme.useStyledTheme();

    const { cityInformation, cityToUpdateInForecast, loading } = useSelector(
        (state: AppStore.IAppState) => state.city,
    );

    if (!cityToUpdateInForecast.city) {
        return null;
    }

    const currentData = cityInformation.find((item) => item.name === cityToUpdateInForecast.city);
    
    if (loading || !cityInformation || !currentData) {
        return <SharedComponents.Text text="Loading ..." />;
    }

    const { name, sys, main, weather } = currentData;

    return (
        <SharedComponents.ForecastDataContainer>
            <SharedComponents.Text
                color={primaryFontColor}
                text={`${name}, ${sys.country}`}
            />
            <SharedComponents.Text
                color={primaryFontColor}
                text={`NOW: ${main.temp} °C`}
            />
            <SharedComponents.WeatherIcon
                icon={weather[0].icon}
                descr={weather[0].description}
                title={weather[0].description}
            />
        </SharedComponents.ForecastDataContainer>
    );
};
