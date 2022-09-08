import { useDispatch } from 'react-redux';

import { SharedComponents, SharedTypes, Paths, AppStore } from '@shared';

export const CityListItem = (item: SharedTypes.ICityData) => {
    const dispatch = useDispatch();
    const { deleteCity, addCityToUpdateInForecast } = AppStore.Actions;

    const onDelete = (e: React.PointerEvent<HTMLButtonElement>): void => {
        let id = e.currentTarget.dataset.lineId;
        if (id) dispatch(deleteCity(id));
    };

    const onAddDetailedForecast = (e: React.PointerEvent<HTMLButtonElement>): void => {
        let city = e.currentTarget.dataset.lineName;
        if (city) dispatch(addCityToUpdateInForecast({ city }));
    };

    return (
        <SharedComponents.HomepageTableLineContainer as="li">
            <SharedComponents.Text text={`${item.name}, ${item.sys.country}`} />
            <SharedComponents.GridContainer gridTemplateColumns="1fr 0.5fr">
                <SharedComponents.Text text={`${item.main.temp} °C `} />
                <SharedComponents.WeatherIcon
                    icon={`${item.weather[0].icon}`}
                    descr={`${item.weather[0].description}`}
                    title={`${item.weather[0].description}`}
                />
            </SharedComponents.GridContainer>
            <SharedComponents.LinkButton
                ariaLabel="Forecast for today"
                text="...more"
                to={Paths.FORECAST_TODAY}
                dataLineName={`${item.name}`}
                onClick={onAddDetailedForecast}
            />
            <SharedComponents.LinkButton
                ariaLabel="Forecast for 3 days"
                text="3 days"
                to={Paths.FORECAST_SEVERAL_DAYS}
                dataLineName={`${item.name}`}
                onClick={onAddDetailedForecast}
            />
            <SharedComponents.Button
                ariaLabel="Remove city from list"
                text="X"
                onClick={onDelete}
                dataLineID={`${item.name}`}
            />
        </SharedComponents.HomepageTableLineContainer>
    );
};
