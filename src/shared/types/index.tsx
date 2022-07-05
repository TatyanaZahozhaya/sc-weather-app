export interface IRoute {
    element: React.ReactElement;
    path: string;
}

export interface ITypography {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: number;
}

export enum FontTypes {
    h1 = "h1",
    h2 = "h2",
    small = "small",
    medium = "medium",
    large = "large",
}

export type FontType =  typeof FontTypes.h1 |  typeof FontTypes.h2 | typeof FontTypes.small |  typeof FontTypes.medium | typeof FontTypes.large

