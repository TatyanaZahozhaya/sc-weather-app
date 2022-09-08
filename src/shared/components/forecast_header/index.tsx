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

    const { name } = currentData;
    const { country } = currentData.sys;
    const { temp } = currentData.main;
    const { icon, description } = currentData.weather[0];

    return (
        <SharedComponents.ForecastDataContainer>
            <SharedComponents.Text
                color={primaryFontColor}
                text={`${name}, ${country}`}
            />
            <SharedComponents.Text
                color={primaryFontColor}
                text={`NOW: ${temp} °C`}
            />
            <SharedComponents.WeatherIcon
                icon={icon}
                descr={description}
                title={description}
            />
        </SharedComponents.ForecastDataContainer>
    );
};
