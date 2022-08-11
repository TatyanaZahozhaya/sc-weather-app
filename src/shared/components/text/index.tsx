import {FC, memo} from 'react';
import styled from 'styled-components';

import { IText, IParagraph } from './types';
import { SharedTypes } from '@shared';

export const Paragraph = styled.p<IParagraph>`
    font-family: ${({type, theme}) => theme.typography[type].fontFamily};
    font-size: ${({ type, theme }) => theme.typography[type].fontSize};
    color: ${({color = 'black'}) => color};
    text-align: ${({textAlign = 'center'}) => textAlign};
`;

export const Text: FC<IText> = memo(({type= SharedTypes.FontTypes.medium, color, textAlign, text} ) => {
    return (
        <Paragraph type={type} color={color} textAlign={textAlign}>
            {text}
        </Paragraph>
    )
})

export const Title: FC<IText> = memo(({type= SharedTypes.FontTypes.h1, color, textAlign="right", text,} ) => {
    return (
        <Paragraph as="h1" type={type} color={color} textAlign={textAlign}>
            {text}
        </Paragraph>
    )
})
