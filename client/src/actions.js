export const LOADED_DATA = 'LOADED_DATA';

export function loadedData(data) {
    return {
        type: LOADED_DATA,
        data
    }
}