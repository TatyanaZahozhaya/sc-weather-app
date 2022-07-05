import { SharedComponents, Theme } from '@shared';

export const CityAddForm = () => {
    const {
        spacing: { s },
    } = Theme.useStyledTheme();
    return (
        <SharedComponents.Form>
            <SharedComponents.Input
                ariaLabel="field to Add city to the list"
                placeholder="Add city to list"
            />
            <SharedComponents.Button
                ariaLabel="button Add city to list"
                text="Add"
            />
        </SharedComponents.Form>
    );
};
