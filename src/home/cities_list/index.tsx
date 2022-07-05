import { SharedComponents } from '@shared';
import { Theme } from '@shared';
import { CityListItem } from '../city_list_item';

const TableColumns = [
    'City',
    'Current data',
    'Forecast for today',
    'Forecast for',
    'Remove from list',
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

export const CitiesList = () => {
    const {
        palette: { secondaryBackgroundColor, decorativeColor },
        spacing: { m, l },
        line: { middle },
    } = Theme.useStyledTheme();
    return (
        <SharedComponents.Container backgroundColor={secondaryBackgroundColor} margin={`${l} 0`}>
            <SharedComponents.GridContainer
                gridTemplateColumns="1fr 1fr 0.8fr 0.8fr 0.8fr"
                padding={m}
                borderBottom={`${middle} solid ${decorativeColor}`}>
                {TableColumns.map(renderTableColumns)}
            </SharedComponents.GridContainer>
            <ul>
            <CityListItem />
            </ul>
        </SharedComponents.Container>
    );
};
