import { SharedComponents, Paths, Theme } from '@shared';

export const CityListItem = () => {
    const {
        spacing: { s },
        line: {thin},
        palette: {decorativeColor},
    } = Theme.useStyledTheme();
    return (
        <SharedComponents.GridContainer
            as="li"
            gridTemplateColumns="1fr 1fr 0.8fr 0.8fr 0.8fr"
            padding={s}
            borderBottom={`${thin} solid ${decorativeColor}`}>
            <SharedComponents.Text text="Minsk, BY " />
            <SharedComponents.GridContainer gridTemplateColumns="1fr 0.5fr">
                <SharedComponents.Text text="25 °C " />
                <SharedComponents.WeatherIcon
                    icon="04d"
                    descr="descr"
                />
            </SharedComponents.GridContainer>
            <SharedComponents.LinkButton
                ariaLabel="Forecast for today"
                text="...more"
                to={Paths.FORECAST_TODAY}
            />
            <SharedComponents.LinkButton
                ariaLabel="Forecast for 5 days"
                text="5 days"
                to={Paths.FORECAST_5_DAYS}
            />
            <SharedComponents.Button
                ariaLabel="Remove city from list"
                text="X"
                /* onClick={onDelete} */
            />
        </SharedComponents.GridContainer>
    );
};
