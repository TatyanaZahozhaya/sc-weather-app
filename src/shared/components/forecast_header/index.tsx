import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Theme, SharedComponents, AppStore } from '@shared';

export const ForecastHeader = () => {
    const {
        palette: { primaryFontColor },
    } = Theme.useStyledTheme();

    const { loading, cityInformation, detailedForecast, cityToUpdateInForecast } = useSelector(
        (state: AppStore.IAppState) => state.city,
    );
    const { updateCityData } = AppStore.Actions;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateCityData({ city: cityToUpdateInForecast.city.toString() }));
    }, []);

    if (loading || !detailedForecast.city) {
        return <SharedComponents.Text text="Loading..." />;
    }

    const currentData = cityInformation.find((item) => item.id === detailedForecast.city.id);

    if (!currentData) {
        return <SharedComponents.Text text="Loading forecast-header 1..." />;
    }

    const { name, country } = detailedForecast.city;
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
                icon={`${icon}`}
                descr={`${description}`}
            />
        </SharedComponents.ForecastDataContainer>
    );
};
