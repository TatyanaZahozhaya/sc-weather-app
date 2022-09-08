import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { Theme, SharedComponents, SharedTypes, AppStore } from '@shared';
import { CityListItem } from '../city_list_item';

const renderCityListItem = (item: SharedTypes.ICityData) => {
    return (
        <CityListItem
            key={item.id}
            {...item}
        />
    );
};

export const CitiesList = () => {
    const {
        spacing: { l },
    } = Theme.useStyledTheme();

    const filteredCitiesSelector = createSelector(
        (state: AppStore.IAppState) => state.filter.activeFilter,
        (state: AppStore.IAppState) => state.city.cityInformation,
        (filter, cities) => {
            if (filter === '') {
                return cities;
            } else {
                return cities.filter((item) => item.name.toLocaleLowerCase().includes(filter, 0));
            }
        },
    );

    const filteredCityInformation = useSelector(filteredCitiesSelector);

    const { cityToUpdateHomepage, loading } = useSelector(
        (state: AppStore.IAppState) => state.city,
    );
    const dispatch = useDispatch();
    const { updateCityData } = AppStore.Actions;

    useEffect(() => {
        if (cityToUpdateHomepage) {
            cityToUpdateHomepage.forEach((item) => {
                dispatch(updateCityData({ city: item }));
            });
        }
    }, []);


    if (!cityToUpdateHomepage) {
        return <SharedComponents.Text text="Enter city name ..." />;
    }

    if (!filteredCityInformation) {
        return <SharedComponents.Text text="Loading ..." />;
    }

    return (
        <SharedComponents.Container margin={`${l} 0`}>
            <SharedComponents.HomepageTableHeader />
            {loading ? (
                <SharedComponents.HomepageTableErrorContainer as="li">
                    <SharedComponents.Text text="Loading city information ..." />
                </SharedComponents.HomepageTableErrorContainer>
            ) : (
                <ul>{filteredCityInformation.map(renderCityListItem)} </ul>
            )}
        </SharedComponents.Container>
    );
};

