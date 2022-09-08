export const getLocalTime = (a: number, b: number) => {
    return new Date((a + b) * 1000).toUTCString().slice(5, -7);
};