import { atom } from "recoil";
import { ThemeMode } from "types";

const isBrowserDardMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initTheme: ThemeMode = isBrowserDardMode ? 'DARK' : 'LIGHT';
const storedTheme = localStorage.getItem('theme') as ThemeMode ?? initTheme;

export const themeModeState = atom({
    key: 'themeMode',
    default: storedTheme
});