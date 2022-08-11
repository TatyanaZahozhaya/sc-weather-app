export const getLocalTime = (a: any, b: any) => {
    return new Date((a + b) * 1000).toUTCString().slice(5, -3);
};