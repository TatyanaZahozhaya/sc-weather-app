import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SharedComponents, SharedTypes, Paths, AppStore, getLocalTime } from '@shared';

export const DataTable = () => {
    const { detailedForecast, cityToUpdateInForecast, loading } = useSelector(
        (state: AppStore.IAppState) => state.city,
    );
    const { fetchCityDetailedForecast, cityFetching } = AppStore.Actions;
    const dispatch = useDispatch();

    const onUpdateDetailedForecast = (e: React.PointerEvent<HTMLButtonElement>): void => {
        dispatch(cityFetching());
        dispatch(fetchCityDetailedForecast({ city: cityToUpdateInForecast.city }));
    };

    useEffect(() => {
        if (cityToUpdateInForecast.city)
            dispatch(fetchCityDetailedForecast({ city: cityToUpdateInForecast.city }));
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

    if (loading || !detailedForecast.city) {
        return <SharedComponents.Text text="Loading ..." />;
    }

    const TableRows = [...detailedForecast.list];
    const timezone = detailedForecast.city.timezone;

    const renderRows = (item: SharedTypes.IForecastListItem, i: number ) => {
        return (
            <SharedComponents.ForecastTableHLineContainer key={i}>
                <SharedComponents.Text text={`${getLocalTime(item.dt, timezone)}`} />
                <SharedComponents.WeatherIcon
                    icon={item.weather[0].icon}
                    descr={item.weather[0].description}
                    title={item.weather[0].description}
                />
                <SharedComponents.Text text={`${item.main.temp}`} />
                <SharedComponents.Text text={`${item.wind.speed}`} />
                <SharedComponents.Text text={`${item.pop}`} />
                <SharedComponents.Text text={`${item.visibility}`} />
            </SharedComponents.ForecastTableHLineContainer>
        );
    };
    return (
        <>
            <SharedComponents.ForecastButtonContainer margin="0 0 10px 0">
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
        </>
    );
};
