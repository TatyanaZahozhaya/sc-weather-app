import { SharedComponents, Paths, Theme } from "@shared";


export const ForecastToday = () => {
    const {spacing: {s, l}} = Theme.useStyledTheme();
    return (
        <div>
            <SharedComponents.FlexContainer justifyContent="space-between" margin={`${l} auto`}>
                <SharedComponents.ForecastHeader />
                <SharedComponents.FlexContainer justifyContent="right" gap={s}>
                    <SharedComponents.LinkButton  ariaLabel="Link to Home page" text="HOME" to={Paths.HOME} />
                    <SharedComponents.LinkButton  ariaLabel="Link to Forecast for 5 days" text="5 days" to={Paths.FORECAST_5_DAYS}/>
                </SharedComponents.FlexContainer>

            </SharedComponents.FlexContainer>
            <SharedComponents.WeatherLine />
        </div>
    );
};
