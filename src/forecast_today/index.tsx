import { useSelector } from 'react-redux';

import { SharedComponents, Paths, AppStore, getLocalTime } from '@shared';

export const ForecastToday = () => {
    const { cityInformation, detailedForecast } = useSelector(
        (state: AppStore.IAppState) => state.city,
    );

    //не ставить проверку на loading - бесконечные запросы на апдейт
    if (!cityInformation) {
        return <SharedComponents.Text text="Loading ..." />;
    }

    const currentData = cityInformation.find((item) => item.id === detailedForecast.city.id);
    if (!currentData) {
        return <SharedComponents.Text text="Loading ..." />;
    }

    const { feels_like, pressure, humidity } = currentData.main;
    const { visibility, timezone, dt } = currentData;
    const { speed, gust } = currentData.wind;
    const { all } = currentData.clouds;
    const { sunrise, sunset } = currentData.sys;

    return (
        <div>
            <SharedComponents.ForecastHeaderContainer>
                <SharedComponents.ForecastHeader />
                <SharedComponents.ForecastButtonContainer>
                    <SharedComponents.LinkButton
                        ariaLabel="Link to Home page"
                        text="HOME"
                        to={Paths.HOME}
                    />
                    <SharedComponents.LinkButton
                        ariaLabel="Link to Forecast for 3 days"
                        text="3 days"
                        to={Paths.FORECAST_3_DAYS}
                    />
                </SharedComponents.ForecastButtonContainer>
            </SharedComponents.ForecastHeaderContainer>
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
        </div>
    );
};
