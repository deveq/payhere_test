import { atom } from "recoil";
import {localStorageEffect} from './effects';

export const repositoriesState = atom<string[]>({
    key: 'repositories',
    default: [],
    effects: [localStorageEffect('repositories')]
});