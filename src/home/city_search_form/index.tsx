import { useDispatch, useSelector } from 'react-redux';

import { AppStore, SharedComponents } from '@shared';

export const CitySearchForm = () => {
    const dispatch = useDispatch();
    const { changeActiveFilter } = AppStore.Actions;

    const { activeFilter } = useSelector((state: AppStore.IAppState) => state.filter);

    const onSubmitForm = (e: React.FormEvent): void => {
        e.preventDefault();
    };

    return (
        <SharedComponents.Form onSubmit={onSubmitForm}>
            <SharedComponents.Input
                ariaLabel="field to Find a city in the list"
                placeholder="Find a city in the list..."
                value={activeFilter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(changeActiveFilter(e.target.value.toLocaleLowerCase()))
                }
            />
        </SharedComponents.Form>
    );
};
