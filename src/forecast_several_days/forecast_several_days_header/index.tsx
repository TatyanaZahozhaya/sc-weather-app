import { SharedComponents, Paths } from '@shared';

export const ForecastSeveralDaysHeader = () => {
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
                    ariaLabel="Link to Forecast for today"
                    text="today"
                    to={Paths.FORECAST_TODAY}
                />
            </SharedComponents.ForecastButtonContainer>
        </SharedComponents.ForecastHeaderContainer>
    );
};
