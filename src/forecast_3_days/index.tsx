import { useDispatch, useSelector } from 'react-redux';

import { SharedComponents, Paths, AppStore, getLocalTime } from '@shared';

export const Forecast3Days = () => {
    const { detailedForecast, cityToUpdateInForecast } = useSelector(
        (state: AppStore.IAppState) => state.city,
    );
    const { cityFetching, fetchCityDetailedForecast } = AppStore.Actions;
    const dispatch = useDispatch();

    const onUpdateDetailedForecast = (e: React.PointerEvent<HTMLButtonElement>): void => {
        dispatch(cityFetching());
        dispatch(fetchCityDetailedForecast({ city: cityToUpdateInForecast.city}));
    };

    //не ставить проверку на loading - бесконечные запросы на апдейт
    if (!detailedForecast.city) {
        return <SharedComponents.Text text="Loading ..." />;
    }

    const TableRows = [...detailedForecast.list];
    const timezone = detailedForecast.city.timezone;

    const renderRows = (item: any, i: any) => {
        return (
            <SharedComponents.ForecastTableHLineContainer key={i}>
                <SharedComponents.Text text={`${getLocalTime(item.dt, timezone)}`} />
                <SharedComponents.WeatherIcon
                    icon={item.weather[0].icon}
                    descr={item.weather[0].description}
                />
                <SharedComponents.Text text={item.main.temp} />
                <SharedComponents.Text text={item.wind.speed} />
                <SharedComponents.Text text={item.pop} />
                <SharedComponents.Text text={item.visibility} />
            </SharedComponents.ForecastTableHLineContainer>
        );
    };

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
                        ariaLabel="Link to Forecast for today"
                        text="today"
                        to={Paths.FORECAST_TODAY}
                    />
                </SharedComponents.ForecastButtonContainer>
            </SharedComponents.ForecastHeaderContainer>
            <SharedComponents.ForecastButtonContainer margin='0 0 10px 0'>
            <SharedComponents.Button
                ariaLabel="Button Update forecast for 3 days"
                text="UPDATE"
                onClick={onUpdateDetailedForecast}
            />
            </SharedComponents.ForecastButtonContainer>

            <SharedComponents.Container>
                <SharedComponents.ForecastTableHeader />
                <ul>{TableRows.map(renderRows)}</ul>
            </SharedComponents.Container>
        </div>
    );
};
