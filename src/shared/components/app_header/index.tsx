import { Theme,  SharedTypes} from '@shared';
import { FlexContainer } from '../containers';
import { Title } from '../text';

export const AppHeader = () => {
    const {
        palette: { decorativeColor },
        spacing: { l },
    } = Theme.useStyledTheme();

    return (
        <FlexContainer
            as="header"
            justifyContent="right"
            margin={`${l} auto`}>
            <Title
                text="GoodWeather"
                type= {SharedTypes.FontTypes.h1}
                color={decorativeColor}
            />
        </FlexContainer>
    );
};
