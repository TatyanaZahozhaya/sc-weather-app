import { SharedComponents } from '@shared';
import { Theme } from '@shared';

const TableColumns = [
    'Time',
    'Temperature',
    'Wind speed',
    'Probability of precipitation',
    'Precipitation volume',
];
const renderTableColumns = (item: string) => {
    return (
        <SharedComponents.Text
            text={item}
            key={item}
            textAlign={"center"}
        />
    );
};

export const WeatherLine = () => {
    const {
        palette: { secondaryBackgroundColor, decorativeColor },
        spacing: { m },
        line: { middle },
    } = Theme.useStyledTheme();
    return (
        <SharedComponents.Container backgroundColor={secondaryBackgroundColor}>
            <SharedComponents.GridContainer
                gridTemplateColumns="1fr 1fr 0.8fr 0.8fr 0.8fr"
                padding={m}
                borderBottom={`${middle} solid ${decorativeColor}`}>
                {TableColumns.map(renderTableColumns)}
            </SharedComponents.GridContainer>
            <ul></ul>
        </SharedComponents.Container>
    );
};
