import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SharedTypes } from '@shared';

import { IText, IParagraph, ITitle } from './types';

export const Paragraph = styled.p<IParagraph>`
    font-family: ${({ type, theme }) => theme.typography[type].fontFamily};
    font-size: ${({ type, theme }) => theme.typography[type].fontSize};
    color: ${({ color = 'black' }) => color};
    text-align: ${({ textAlign = 'center' }) => textAlign};
`;

export const TitleElement = styled(Link)`
    font-family: ${({ theme }) => theme.typography[SharedTypes.FontTypes.h1].fontFamily};
    font-size: ${({ theme }) => theme.typography[SharedTypes.FontTypes.h1].fontSize};
    color: ${({ theme }) => theme.palette.decorativeColor};
`;

export const Text: FC<IText> = memo(
    ({ type = SharedTypes.FontTypes.medium, color, textAlign, text }) => {
        return (
            <Paragraph
                type={type}
                color={color}
                textAlign={textAlign}>
                {text}
            </Paragraph>
        );
    },
);

export const Title: FC<ITitle> = memo(({ text, to }) => {
    return (
        <TitleElement
            to={to}>
            {text}
        </TitleElement>
    );
});
