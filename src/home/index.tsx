import { CityAddForm } from './city_add_form';
import { CitySearchForm } from './city_search_form';
import { CitiesList } from './cities_list';

import { SharedComponents } from '@shared';

export const Home = () => {
    return (
        <SharedComponents.MainPartContainer as='main'>
            <CityAddForm />
            <CitySearchForm />
            <CitiesList />
        </SharedComponents.MainPartContainer>
    );
};
