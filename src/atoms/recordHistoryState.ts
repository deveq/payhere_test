import { atom, selector } from "recoil";
import {localStorageEffect} from './effects';

export const recordHistoryState = atom<string[]>({
    key: 'recordHistory',
    default: [],
    effects: [localStorageEffect('recordHistory')]
});