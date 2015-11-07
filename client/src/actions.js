export const LOADED_DATA = 'LOADED_DATA';

// Resets the currently visible error message.
export function loadedData(data) {
    return {
        type: LOADED_DATA,
        data
    }
}