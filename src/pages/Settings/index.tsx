import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import ToggleButton from 'components/ToggleButton';
import Button, { Destructive, Primary } from 'components/Button';
import * as Styled from './styles';
import Aside from 'components/Aside';
// import {themeModeState} from '../atoms/themeMode';
import { themeModeState } from 'atoms/themeMode';
import { recordModeState } from 'atoms/recordMode';
import {asideSelectedIndex} from 'atoms/asideSelectedIndex';
import { IAsideListItem } from 'components/Aside/AsideList';

const Settings = () => {
	// TODO: 다크모드, 검색기록, 계정, 초기화 함수 만들기
	const [themeMode, setThemeMode] = useRecoilState(themeModeState);
	const [recordMode, setRecordMode] = useRecoilState(recordModeState);
    const selectedIndex = useRecoilValue(asideSelectedIndex);

    const setTheme = () => {
        setThemeMode((prev) => prev === 'DARK' ? 'LIGHT' : 'DARK');
    }

    const setRecord = () => {
        setRecordMode((prev) => !prev);
    }

	const asideMenuList = ['다크모드', '검색기록', '초기화'];

	const settingsMenuList = [
		[
			{
				label: '다크모드 사용',
				button: (
					<ToggleButton
						clicked={themeMode === 'DARK'}
						onClick={setTheme}
					/>
				),
			},
		],
		[
			{
				label: '검색 기록하기',
				button: (
					<ToggleButton
						clicked={recordMode}
						onClick={setRecord}
					/>
				),
			},
			{
				label: '검색 기록 삭제',
				button: <Destructive size="sm">삭제</Destructive>,
			},
		],
		[
			{
				label: '관심 목록 지우기',
				button: <Destructive size="sm">삭제</Destructive>,
			},
			{
				label: '모든 정보 지우기',
				button: <Destructive size="sm">삭제</Destructive>,
			},
		],
	];

	return (
		<>
			<Aside data={asideMenuList} title="설정" />
			<Styled.SettingsContainer>
				{settingsMenuList.map((tab, index) => (
					<Styled.MenuTab
						data={tab}
						title={asideMenuList[index]}
						key={asideMenuList[index]}
						selected={selectedIndex === index}
					/>
				))}
			</Styled.SettingsContainer>
		</>
	);
};

export default Settings;
