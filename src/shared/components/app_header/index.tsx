import { useDispatch, useSelector } from 'react-redux';

import { Theme, SharedTypes, SharedComponents, AppStore, Paths } from '@shared';

export const AppHeader = () => {
    const {
        palette: { decorativeColor },
        spacing: { s, l },
    } = Theme.useStyledTheme();

    const { activeTheme } = useSelector((state: AppStore.IAppState) => state.theme);

    const dispatch = useDispatch();
    const { themeToggle } = AppStore.Actions;

    const onToggleTheme = (e: React.MouseEvent<HTMLButtonElement>): void => {
        if (e.currentTarget.value === 'light') {
            dispatch(themeToggle('dark'));
        } else {
            dispatch(themeToggle('light'));
        }
    };

    return (
        <>
            <SharedComponents.FlexContainer
                as="header"
                justifyContent="right"
                margin={`${l} auto ${s}`}>
                <SharedComponents.Title
                    text="GoodWeather"
                    href={Paths.HOME}
                    type={SharedTypes.FontTypes.h1}
                    color={decorativeColor}
                />
            </SharedComponents.FlexContainer>
            <SharedComponents.Toggler
                id="toggler"
                ariaLabel="theme toggler (light/dark)"
                onClick={onToggleTheme}
                value={activeTheme}
            />
        </>
    );
};
