import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SharedComponents, AppStore } from '@shared';

export const CityAddForm = () => {
    const [cityName, setCityName] = useState('');

    const dispatch = useDispatch();

    const { cityInformation } = useSelector((state: AppStore.IAppState) => state.city);
    const { getCityData } = AppStore.Actions;

    const onSubmitHandler = (e: React.FormEvent): void => {
        e.preventDefault();
        if (cityName.length === 0) {
            alert('enter city name ');
            setCityName('');
        } else if (
            cityName.length > 0 &&
            !cityInformation.some((item) =>
                item.name.toLocaleLowerCase().includes(cityName.toLocaleLowerCase()),
            )
        ) {
            dispatch(getCityData({ city: cityName }));
            setCityName('');
        } else {
            alert('the city is already in the list');
            setCityName('');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value.length >= 0) {
            setCityName(e.target.value);
        }
    };

    return (
        <SharedComponents.Form onSubmit={onSubmitHandler}>
            <SharedComponents.Input
                ariaLabel="field to Add city to the list"
                placeholder="Add city to list"
                onChange={handleChange}
                value={cityName}
            />
            <SharedComponents.Button
                ariaLabel="button Add city to list"
                text="Add"
            />
        </SharedComponents.Form>
    );
};
