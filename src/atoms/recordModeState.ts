import { atom, selector, DefaultValue } from "recoil";
import {localStorageEffect} from './effects';
import {recordHistoryState} from './recordHistoryState';

const recordModeState = atom<boolean>({
    key: 'recordMode',
    default: true,
    effects: [localStorageEffect('record')]
});

export const recordModeSelector = selector({
    key: 'recordModeSelector',
    get: ({get}) => get(recordModeState),
    set: ({set, reset}, newValue) => {
        if (newValue === false) {
            reset(recordHistoryState)
        }
        set(recordModeState,newValue);
    }
})

export {recordHistoryState};