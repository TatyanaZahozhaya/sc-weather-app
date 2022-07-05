import { SharedComponents, Paths, Theme } from "@shared";

export const Forecast5Days = () => {
    const {spacing: {s, l}} = Theme.useStyledTheme();
    return (
        <div>
            <SharedComponents.FlexContainer justifyContent="space-between" margin={`${l} auto`}>
                <SharedComponents.ForecastHeader />
                <SharedComponents.FlexContainer justifyContent="right" gap={s}>
                    <SharedComponents.LinkButton  ariaLabel="Link to Home page" text="HOME" to={Paths.HOME} />
                    <SharedComponents.LinkButton  ariaLabel="Link to detailed Forecast for today" text="today" to={Paths.FORECAST_TODAY}/>
                </SharedComponents.FlexContainer>

            </SharedComponents.FlexContainer>
            <SharedComponents.WeatherLine />
        </div>
    );
};
