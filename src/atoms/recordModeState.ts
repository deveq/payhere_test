import { atom } from "recoil";
import {localStorageEffect} from './effects';

export const recordModeState = atom<boolean>({
    key: 'recordMode',
    default: true,
    effects: [localStorageEffect('record')]
});