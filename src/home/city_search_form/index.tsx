import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppStore, SharedComponents } from '@shared';

export const CitySearchForm = () => {
/*     const [filter, setFilter] = useState(''); */

    const dispatch = useDispatch();
    const { activeFilterChanged } = AppStore.Actions;

    const {activeFilter} = useSelector((state: AppStore.IAppState) => state.filter)

/*     useEffect(() => {
        dispatch(activeFilterChanged(filter));
    }, [filter, activeFilterChanged, dispatch]); */

/*     const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFilter(e.target.value.toLocaleLowerCase());
    }; */

    const onSubmitForm = (e: React.FormEvent):void => {
        e.preventDefault();
    }
    return (
        <SharedComponents.Form onSubmit={onSubmitForm}>
            <SharedComponents.Input
                ariaLabel="field to Find a city in the list"
                placeholder="Find a city in the list..."
                value={activeFilter}
                onChange={(e:any) => dispatch(activeFilterChanged(e.target.value))}
            />
        </SharedComponents.Form>
    );
};
