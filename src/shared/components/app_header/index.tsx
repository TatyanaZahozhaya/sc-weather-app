import { useDispatch, useSelector } from 'react-redux';

import { Theme, SharedTypes, SharedComponents, AppStore } from '@shared';
import { FlexContainer } from '../containers';

export const AppHeader = () => {
    const {
        palette: { decorativeColor },
        spacing: { s, l },
    } = Theme.useStyledTheme();

    const { activeTheme } = useSelector((state: AppStore.IAppState) => state.theme);

    const dispatch = useDispatch();
    const { themeToggle } = AppStore.Actions;

    const onToggleTheme = (e: any): void => {
        if (e.target.value === 'light') {
            dispatch(themeToggle('dark'));
        } else {
            dispatch(themeToggle('light'));
        }
    };

    return (
        <>
            <FlexContainer
                as="header"
                justifyContent="right"
                margin={`${l} auto ${s}`}>
                <SharedComponents.Title
                    text="GoodWeather"
                    type={SharedTypes.FontTypes.h1}
                    color={decorativeColor}
                />
            </FlexContainer>
            <SharedComponents.Toggler
                id="toggler"
                ariaLabel='theme toggler (light/dark)'
                onClick={onToggleTheme}
                value={activeTheme}
                
            />
        </>
    );
};
