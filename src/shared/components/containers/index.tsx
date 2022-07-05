import { IGridContainer, IFlexContainer, IAppContainer, IContainer } from './types';
import styled from 'styled-components';

export const AppContainer = styled.div<IAppContainer>`
    position: relative;
    max-width: ${({ maxWidth = '700px' }) => maxWidth};
    font-family: ${({ fontFamily = 'Arial' }) => fontFamily};
    font-size: ${({ fontSize = '16px' }) => fontSize};
    margin: ${({ margin = '0 auto' }) => margin};
    padding: ${({ padding = '5px' }) => padding};
    background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
`;

export const Container = styled.div<IContainer>`
    display: block;
    width: ${({ width = '100%' }) => width};
    margin: ${({ margin = '0 auto' }) => margin};
    padding: ${({ padding = '0' }) => padding};
    gap: ${({ gap = '0' }) => gap};
    align-items: ${({ alignItems = 'center' }) => alignItems};
    background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
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
`;

export const FlexContainer = styled.div<IFlexContainer>`
    display: flex;
    width: ${({ width = '100%' }) => width};
    margin: ${({ margin = '0 auto' }) => margin};
    padding: ${({ padding = '0' }) => padding};
    gap: ${({ gap = '0' }) => gap};
    flex-direction: ${({ flexDirection = '1fr' }) => flexDirection};
    justify-content: ${({ justifyContent = 'left' }) => justifyContent};
    align-items: ${({ alignItems = 'flex-end' }) => alignItems};
`;
