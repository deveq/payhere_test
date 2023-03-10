import { AtomEffect } from 'recoil';

export const themeEffect: AtomEffect<string> = ({ onSet, setSelf }) => {
	// localStorage로부터 theme을 가져온다
	let savedValue = localStorage.getItem('theme');
	if (savedValue === null) {
		// 없을 경우 browser에 설정된 테마를 꺼내온다
		const isBrowserDardMode =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches;
		savedValue = isBrowserDardMode ? 'DARK' : 'LIGHT';
	}

	setSelf(savedValue); // 'DARK' | 'LIGHT'

	onSet((newValue, _, isReset) => {
		isReset
			? localStorage.removeItem('theme')
			: localStorage.setItem('theme', newValue);
	});
};

export const localStorageEffect: <T>(key: string) => AtomEffect<T> =
	(key: string) =>
	({ setSelf, onSet }) => {

		const savedValue = localStorage.getItem(key);
		if (savedValue != null) {
			setSelf(JSON.parse(savedValue));
		}
		onSet((newValue, _, isReset) => {
			isReset
				? localStorage.removeItem(key)
				: localStorage.setItem(key, JSON.stringify(newValue));
		});
	};
