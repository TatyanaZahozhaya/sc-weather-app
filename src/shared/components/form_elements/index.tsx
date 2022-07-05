import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Text } from '../text';
import { SharedTypes } from '@shared';
import { IFormElement, IButton, IInput, ILink } from './types';

//Button
export const StyledButton = styled.button<IFormElement>`
    border: ${({ theme }) => `${theme.palette.decorativeColor} ${theme.line.thin} solid` || '1px solid black'};
    color: ${({ theme }) => theme.palette.secondaryFontColor};
    border-radius: ${({ theme }) => theme.spacing.s || '10px'};
    background-color: ${({ theme }) => theme.palette.decorativeColorTransparent};
    padding: ${({ theme }) => theme.spacing.xs || '0'};
    height: ${({ theme }) => theme.spacing.xl || '10px'};
    width: ${({ theme }) => theme.proportions.widthM};
    cursor: ${({ cursor = 'pointer' }) => cursor};
    align-items: ${({ alignItems = 'center' }) => alignItems};
    display: ${({ display = 'inline-grid' }) => display};
    justify-items: ${({ justifyItems = 'center' }) => justifyItems};
    outline: ${({ outline = 'none' }) => outline};
    justify-self: ${({ justifySelf = 'center' }) => justifySelf};


    &:focus-visible {
        border: ${({ theme }) => `${theme.palette.decorativeColor} ${theme.line.middle} solid` || '3px solid black'};
    }
    &:hover,
    :active {
        border: ${({ theme }) => `${theme.palette.decorativeColor} ${theme.line.middle} solid` || '3px solid black'};
    }
`;

export const Button: FC<IButton> = memo(
    ({ color = 'black', type = SharedTypes.FontTypes.small, ariaLabel, text }) => {
        return (
            <StyledButton
                color={color}
                aria-label={ariaLabel}>
                <Text
                    color={color}
                    text={text}
                    type={SharedTypes.FontTypes.small}
                />
            </StyledButton>
        );
    },
);

//LinkButton
export const StyledLink = styled(Link)`
    border: ${({ theme }) => `${theme.palette.decorativeColor} ${theme.line.thin} solid` || '1px solid black'};
    color: ${({ theme }) => theme.palette.secondaryFontColor};
    border-radius: ${({ theme }) => theme.spacing.s || '10px'};
    background-color: ${({ theme }) => theme.palette.decorativeColorTransparent};
    padding: ${({ theme }) => theme.spacing.xs || '0'};
    height: ${({ theme }) => theme.spacing.xl || '10px'};
    width: ${({ theme }) => theme.proportions.widthM};
    cursor: ${'pointer'};
    align-items: ${'center'};
    display: ${'inline-grid'};
    justify-items: ${'center'};
    outline: ${'none'};
    justify-self: ${'center'};


    &:focus-visible {
        border: ${({ theme }) => `${theme.palette.decorativeColor} ${theme.line.middle} solid` || '3px solid black'};
    }
    &:hover,
    :active {
        border: ${({ theme }) => `${theme.palette.decorativeColor} ${theme.line.middle} solid` || '3px solid black'};
    }
`;

export const LinkButton: FC<ILink> = memo(
    ({ color = 'black', type = SharedTypes.FontTypes.small, ariaLabel, text, to }) => {
        return (
            <StyledLink
                to={to}
                color={color}
                aria-label={ariaLabel}>
                <Text
                    color={color}
                    text={text}
                    type={SharedTypes.FontTypes.small}
                />
            </StyledLink>
        );
    },
);

//Input
export const StyledInput = styled.input<IFormElement>`
    border: ${({ theme }) => `${theme.palette.decorativeColor} ${theme.line.thin} solid` || '1px solid black'};
    color: ${({ theme }) => theme.palette.secondaryFontColor};
    border-radius: ${({ theme }) => theme.spacing.s || '10px'};
    background-color: ${'transparent'};
    padding: ${({ theme }) => theme.spacing.xs || '5px'};
    height: ${({ theme }) => theme.spacing.xl || '10px'};
    cursor: ${({ cursor = 'pointer' }) => cursor};
    align-items: ${({ alignItems = 'center' }) => alignItems};
    display: ${({ display = 'inline-grid' }) => display};
    justify-items: ${({ justifyItems = 'center' }) => justifyItems};
    outline: ${({ outline = 'none' }) => outline};
    justify-self: ${({ justifySelf = 'center' }) => justifySelf};
    width: ${({ theme }) => theme.proportions.widthL};

    &:focus-visible {
        background-color: ${({ theme }) => theme.palette.decorativeColorTransparent};
    }
    &:hover,
    :active {
        background-color: ${({ theme }) => theme.palette.decorativeColorTransparent};
    }
`;

export const Input: FC<IInput> = memo(
    ({ color = 'black', ariaLabel, inputType = 'text', placeholder, value, onChange }) => {
        return (
            <StyledInput
                color={color}
                aria-label={ariaLabel}
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        );
    },
);
