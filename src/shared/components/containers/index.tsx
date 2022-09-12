import styled, { keyframes } from 'styled-components';
import { IGridContainer, IFlexContainer, IAppContainer, IContainer } from './types';

const brightUp = keyframes`
    from { opacity: 0; }
`;

const zoomIn = keyframes`
    from { transform: scale3d(0,0,0); }
`;

export const AppContainer = styled.div<IAppContainer>`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: ${({ maxWidth = '700px' }) => maxWidth};
    min-height: 100vh;
    font-family: ${({ fontFamily = 'Arial' }) => fontFamily};
    font-size: ${({ fontSize = '16px' }) => fontSize};
    margin: ${({ margin = '0 auto' }) => margin};
    padding: ${({ padding = '5px' }) => padding};
    background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
`;

export const MainPartContainer = styled.div<IAppContainer>`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
`;

export const Container = styled.div<IContainer>`
    display: block;
    width: ${({ width = '100%' }) => width};
    margin: ${({ margin = '0 auto' }) => margin};
    padding: ${({ padding = '0' }) => padding};
    gap: ${({ gap = '0' }) => gap};
    align-items: ${({ alignItems = 'center' }) => alignItems};
    background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
    animation-name: ${brightUp};
    animation-duration: 2s;
`;

export const GridContainer = styled.div<IGridContainer>`
    display: grid;
    width: ${({ width = '100%' }) => width};
    margin: ${({ margin = '0 auto' }) => margin};
    padding: ${({ padding = '0' }) => padding};
    gap: ${({ gap = '0' }) => gap};
    grid-template-columns: ${({ gridTemplateColumns = '1fr' }) => gridTemplateColumns};
    align-items: ${({ alignItems = 'center' }) => alignItems};
    border-bottom: ${({ borderBottom }) => borderBottom};
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const FlexContainer = styled.div<IFlexContainer>`
    display: flex;
    flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
    width: ${({ width = '100%' }) => width};
    margin: ${({ margin = '0 auto' }) => margin};
    padding: ${({ padding = '0' }) => padding};
    gap: ${({ gap = '0' }) => gap};
    justify-content: ${({ justifyContent = 'left' }) => justifyContent};
    align-items: ${({ alignItems = 'flex-end' }) => alignItems};
    background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
`;

export const TodayTableHeaderContainer = styled(GridContainer)`
    display: grid;
    width: 100%
    margin: 0 auto;
    gap: 0;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.m};
    border-bottom: ${({ theme }) => `${theme.line.middle} solid ${theme.palette.decorativeColor}`}; 
    background-color: ${({ theme }) => theme.palette.secondaryBackgroundColor};
`;

export const TodayTableLineContainer = styled(TodayTableHeaderContainer)`
    margin: 0 auto 15px;
    border-bottom: ${({ theme }) => `${theme.line.thin} solid ${theme.palette.decorativeColor}`};
`;

export const ForecastTableHeaderContainer = styled(TodayTableHeaderContainer)`
    grid-template-columns: 0.6fr 0.4fr 0.6fr 0.7fr 0.7fr 0.7fr;
`;

export const ForecastTableHLineContainer = styled(ForecastTableHeaderContainer)`
    border-bottom: ${({ theme }) => `${theme.line.thin} solid ${theme.palette.decorativeColor}`};
`;

export const HomepageTableHeaderContainer = styled(TodayTableHeaderContainer)`
    grid-template-columns: 1fr 1fr 0.8fr 0.8fr 0.8fr;
    animation-name: ${brightUp};
    animation-duration: 1s;
`;

export const HomepageTableLineContainer = styled(HomepageTableHeaderContainer)`
    border-bottom: ${({ theme }) => `${theme.line.thin} solid ${theme.palette.decorativeColor}`};
`;

export const HomepageTableErrorContainer = styled(HomepageTableHeaderContainer)`
    grid-template-columns: 1fr;
`;

export const ForecastHeaderContainer = styled(FlexContainer)`
    justify-content: space-between;
    margin: ${({ theme }) => `${theme.spacing.l} auto`};
`;

export const ForecastButtonContainer = styled(FlexContainer)`
    justify-content: right;
    gap: ${({ theme }) => theme.spacing.s};
`;

export const ForecastDataContainer = styled(FlexContainer)`
    align-items: center;
    gap: ${({ theme }) => theme.spacing.s};
    padding: ${({ theme }) => `0 0 0 ${theme.spacing.s}`};
    background-color: ${({ theme }) => theme.palette.decorativeColorTransparent};
    animation-name: ${zoomIn};
    animation-duration: 1s;
`;
