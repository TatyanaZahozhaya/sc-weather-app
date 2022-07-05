import { FC, memo } from 'react';
import styled from 'styled-components';

interface IIMg {
    display?: string;
    height?: string;
    src?: string;
    alt: string;
}
export const StyledImg = styled.img<IIMg>`
    display: 'inline-block';
    height: ${({ theme }) => theme.proportions.heightM};
`;

interface IIcon {
    icon: string;
    descr: string;
    
}

export const WeatherIcon: FC<IIcon> = memo(({icon, descr}) => {
    return <StyledImg 
    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
    alt={descr}/>;
});

