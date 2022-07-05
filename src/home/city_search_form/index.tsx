import { SharedComponents } from '@shared';

export const CitySearchForm = () => {
    return (
        <SharedComponents.Form
            /*         onSubmit={onSubmitHandler} */
            className="city-search-panel">
            {
                <SharedComponents.Input
                    ariaLabel="field to Find a city in the list"
                    placeholder="Find a city in the list..."
                    value=""
                    /*                     onChange='' */
                />
            }
        </SharedComponents.Form>
    );
};
