export interface IAppContainer {
    position?: string;
    maxWidth?: string;
    fontFamily?: string;
    fontSize?: string;
    margin?: string;
    padding?: string;
    backgroundColor?: string;
}

export interface IContainer {
    display?: string;
    width?: string;
    margin?: string;
    padding?: string;
    gap?: string;
    alignItems?: string;
    backgroundColor?: string;
    borderBottom?: string;
}

export interface IGridContainer extends IContainer {
    gridTemplateColumns?: string;
}

export interface IFlexContainer extends IContainer {
    justifyContent?: string;
}
