import { atom, selector } from "recoil";

const storedValue = JSON.parse(localStorage.getItem('record') || 'true');

export const recordModeState = atom<boolean>({
    key: 'recordMode',
    default: storedValue
});