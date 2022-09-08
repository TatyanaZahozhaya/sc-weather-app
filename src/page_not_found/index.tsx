import { SharedComponents, Theme } from '@shared';

export const PageNotFound = () => {
    const {
        spacing: { l },
    } = Theme.useStyledTheme();

    return (
        <SharedComponents.MainPartContainer as="main">
            <SharedComponents.Container margin={`${l} 0`}>
                <SharedComponents.HomepageTableErrorContainer as="li">
                    <SharedComponents.Text text="Page not found" />
                </SharedComponents.HomepageTableErrorContainer>
            </SharedComponents.Container>
        </SharedComponents.MainPartContainer>
    );
};
