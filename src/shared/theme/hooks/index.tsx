import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
/* import { ITheme } from '../types'; */
import { DefaultTheme } from 'styled-components';

export const useStyledTheme = () => {
    const themeContext = useContext<DefaultTheme>(ThemeContext); // было <ITheme>

    if (!themeContext) {
        throw new Error('Theme context is not defined!');
    }

    return themeContext;
};
