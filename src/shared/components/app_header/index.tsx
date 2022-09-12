import { useDispatch, useSelector } from 'react-redux';

import { Theme, SharedComponents, AppStore, Paths } from '@shared';

export const AppHeader = () => {
    const {
        spacing: { s, l },
    } = Theme.useStyledTheme();

    const { activeTheme } = useSelector((state: AppStore.IAppState) => state.theme);

    const dispatch = useDispatch();
    const { toggleTheme } = AppStore.Actions;

    const onToggleTheme = (e: React.MouseEvent<HTMLButtonElement>): void => {
        if (e.currentTarget.value === 'light') {
            dispatch(toggleTheme('dark'));
        } else {
            dispatch(toggleTheme('light'));
        }
    };

    return (
        <SharedComponents.FlexContainer
            as="header"
            justifyContent="right"
            margin={`${l} auto ${s}`}
            flexDirection="column">
            <SharedComponents.Title
                text="GoodWeather"
                to={Paths.HOME}
            />
            <SharedComponents.Toggler
                id="toggler"
                ariaLabel="theme toggler (light/dark)"
                onClick={onToggleTheme}
                value={activeTheme}
            />
        </SharedComponents.FlexContainer>
    );
};
