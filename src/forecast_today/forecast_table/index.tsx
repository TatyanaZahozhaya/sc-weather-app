import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SharedComponents, Paths, AppStore, getLocalTime } from '@shared';

export const ForecastTable = () => {
    const { cityInformation, cityToUpdateInForecast, loading } = useSelector(
        (state: AppStore.IAppState) => state.city,
    );
    const dispatch = useDispatch();
    const { updateCityData } = AppStore.Actions;

    useEffect(() => {
        if (cityToUpdateInForecast.city) {
            dispatch(updateCityData({ city: cityToUpdateInForecast.city.toString() }));
        }
    }, []);


    if (!cityToUpdateInForecast.city) {
        return (
            <>
                <SharedComponents.Text text="No data. Please, enter city name. Link to Home page ..." />
                <SharedComponents.LinkButton
                    ariaLabel="Link to Home page"
                    text="HOME"
                    to={Paths.HOME}
                />
            </>
        );
    }

    const currentData = cityInformation.find((item) => item.name === cityToUpdateInForecast.city);

    if (loading || !currentData) {
        return <SharedComponents.Text text="Loading ..." />;
    }
    const { feels_like, pressure, humidity } = currentData.main;
    const { visibility, timezone, dt } = currentData;
    const { speed, gust } = currentData.wind;
    const { all } = currentData.clouds;
    const { sunrise, sunset } = currentData.sys;

    return (
        <>
            <SharedComponents.ForecastDataContainer>
                <SharedComponents.Text
                    text={`Time of data calculation:   ${getLocalTime(dt, timezone)}`}
                />
            </SharedComponents.ForecastDataContainer>
            <SharedComponents.Container>
                <SharedComponents.Line1TableHeader />
                <SharedComponents.TodayTableLineContainer>
                    <SharedComponents.Text text={`${feels_like}`} />
                    <SharedComponents.Text text={`${pressure}`} />
                    <SharedComponents.Text text={`${humidity}`} />
                </SharedComponents.TodayTableLineContainer>
                <SharedComponents.Line2TableHeader />
                <SharedComponents.TodayTableLineContainer>
                    <SharedComponents.Text text={`${visibility}`} />
                    <SharedComponents.Text text={`${speed}`} />
                    {gust ? (
                        <SharedComponents.Text text={`${gust}`} />
                    ) : (
                        <SharedComponents.Text text={`-`} />
                    )}
                </SharedComponents.TodayTableLineContainer>
                <SharedComponents.Line3TableHeader />
                <SharedComponents.TodayTableLineContainer>
                    <SharedComponents.Text text={`${all}`} />
                    <SharedComponents.Text text={`${getLocalTime(sunrise, timezone)}`} />
                    <SharedComponents.Text text={`${getLocalTime(sunset, timezone)}`} />
                </SharedComponents.TodayTableLineContainer>
            </SharedComponents.Container>
        </>
    );
};
