import { useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import ToggleButton from 'components/ToggleButton';
import Button, { Destructive, Primary } from 'components/Button';
import * as Styled from './styles';
import Aside from 'components/Aside';

import {
	themeModeState,
	recordModeSelector,
	repositoriesState,
	recordHistoryState,
} from 'atoms';

const Settings = () => {
	// TODO: 다크모드, 검색기록, 계정, 초기화 함수 만들기
	const [themeMode, setThemeMode] = useRecoilState(themeModeState);
	const [recordMode, setRecordMode] = useRecoilState(recordModeSelector);
	const resetRepositories = useResetRecoilState(repositoriesState);
	const resetRecordHistory = useResetRecoilState(recordHistoryState);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const setTheme = () => {
		setThemeMode((prev) => (prev === 'DARK' ? 'LIGHT' : 'DARK'));
	};

	const setRecord = () => {
		setRecordMode((prev) => !prev);
	};

	const askDelete: <T extends () => void>(text: string, func: T) => void = (
		text,
		func,
	) => {
		const answer = confirm(text);
		if (answer) {
			func();
		}
	};

	const menuList = ['다크모드', '검색기록', '관심목록'];

	const settingsMenuList = [
		[
			{
				label: '다크모드 사용',
				button: (
					<ToggleButton clicked={themeMode === 'DARK'} onClick={setTheme} />
				),
			},
		],
		[
			{
				label: '검색 기록하기',
				button: <ToggleButton clicked={recordMode} onClick={setRecord} />,
			},
			{
				label: '검색 기록 삭제',
				button: (
					<Destructive
						onClick={() => {
							askDelete('검색기록을 지우시겠습니까?', resetRecordHistory);
						}}
						size="sm"
					>
						삭제
					</Destructive>
				),
			},
		],
		[
			{
				label: '관심 목록 지우기',
				button: (
					<Destructive
						onClick={() => {
							askDelete('관심목록을 지우시겠습니까?', resetRepositories);
						}}
						size="sm"
					>
						삭제
					</Destructive>
				),
			},
		],
	];

	return (
		<>
			<Aside
				data={menuList}
				title="설정"
				index={selectedIndex}
				setIndex={setSelectedIndex}
			/>
			<Styled.SettingsContainer>
				{settingsMenuList.map((tab, index) => (
					<Styled.MenuTab
						data={tab}
						title={menuList[index]}
						key={menuList[index]}
						selected={selectedIndex === index}
					/>
				))}
			</Styled.SettingsContainer>
		</>
	);
};

export default Settings;
