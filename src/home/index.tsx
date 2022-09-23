import { SharedComponents } from '@shared';

import { CityAddForm } from './city_add_form';
import { CitySearchForm } from './city_search_form';
import { CitiesList } from './cities_list';

export const Home = () => {
    return (
        <SharedComponents.MainPartContainer as='main'>
            <CityAddForm />
            <CitySearchForm />
            <CitiesList />
        </SharedComponents.MainPartContainer>
    );
};
