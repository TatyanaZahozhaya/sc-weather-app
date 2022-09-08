import { SharedComponents, Paths } from '@shared';

export const ForecastTodayHeader = () => {
    return (
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
                    to={Paths.FORECAST_SEVERAL_DAYS}
                />
            </SharedComponents.ForecastButtonContainer>
        </SharedComponents.ForecastHeaderContainer>
    );
};
