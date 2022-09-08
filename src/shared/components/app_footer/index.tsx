import { Theme, SharedComponents } from '@shared';

export const AppFooter = () => {
    const {
        palette: { decorativeColor },
        spacing: { s, l },
    } = Theme.useStyledTheme();

    return (
        <SharedComponents.FlexContainer
            as="footer"
            justifyContent="left"
            margin={`${l} auto ${s}`}
            backgroundColor={decorativeColor}
            padding={`${s}`}>
            <SharedComponents.Text text="GoodWeather, 2022" />
        </SharedComponents.FlexContainer>
    );
};
