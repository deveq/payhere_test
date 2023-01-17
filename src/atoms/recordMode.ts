import { atom } from "recoil";
import {recordEffect} from './effects';

export const recordModeState = atom<boolean>({
    key: 'recordMode',
    default: true,
    effects: [recordEffect]
});