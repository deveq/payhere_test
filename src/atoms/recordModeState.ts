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

// selector({
//     key: 'tempCelcius',
//     get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,
//     set: ({set}, newValue) =>
//       set(
//         tempFahrenheit,
//         newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32,
//       ),
//   });
export {recordHistoryState};