export interface IAppContainer {
    display?: string;
    flexDirection?: string;
    flex?: string;
    position?: string;
    maxWidth?: string;
    minHeight?: string;
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
    flexDirection?: string;
}
