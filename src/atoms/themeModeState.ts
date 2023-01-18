import { atom } from 'recoil';
import {themeEffect} from './effects';

export const themeModeState = atom({
	key: 'themeMode',
	default: 'LIGHT',
	effects: [themeEffect],
});
