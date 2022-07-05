import { Theme } from "@shared";
import { Text } from "../text";
import { FlexContainer } from "../containers";


export const ForecastHeader = () => {
    const {palette: {primaryFontColor}} = Theme.useStyledTheme();
    return (
        <FlexContainer justifyContent="left" >
            <Text color={primaryFontColor} text="Minsk, BY " />
            <Text color={primaryFontColor} text="NOW: 25 °C " />
{/*             <SharedComponents.WeatherIcon icon="" descr=""/> */}
        </FlexContainer>
    )
}