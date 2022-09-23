import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
    spacing: {
        xs: '5px',
        s: '10px',
        m: '20px',
        l: '30px',
        xl: '35px',
    },
    line: {
        thin: '1px',
        middle: '3px',
        thick: '5px',
    },
    proportions: {
        heightXS: '15px',
        heightS: '25px',
        heightM: '35px',
        widthXS: '15px',
        widthS: '50px',
        widthM: '90px',
        widthL: '180px',
        widthXL: '700px',
    },
    typography: {
        h1: {
            fontFamily: 'Fascinate',
            fontSize: '2rem',
            fontWeight: 400,
        },
        h2: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        small: {
            fontSize: '0.8rem',
            fontWeight: 400,
        },
        medium: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        large: {
            fontSize: '2rem',
            fontWeight: 500,
        },
    },
    palette: {
        primaryFontColor: 'rgb(21, 19, 60)',
        secondaryFontColor: 'rgb(0, 0, 0)',
        decorativeColor: 'rgb(236, 153, 75)',
        decorativeColorTransparent: 'rgba(236, 153, 75, 0.4)',
        primaryBackgroundColor: 'rgb(241, 238, 233)',
        secondaryBackgroundColor: 'rgba(115, 119, 123, 0.4)',
    },
};
