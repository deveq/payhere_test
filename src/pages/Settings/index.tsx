import {useState} from 'react';
import {useRecoilState} from 'recoil';
import ToggleButton from 'components/ToggleButton';
import Button, {Destructive, Primary} from 'components/Button';
import * as Styled from './styles';
import Aside from 'components/Aside';
// import {themeModeState} from '../atoms/themeMode';
import {themeModeState} from '../../atoms/themeMode';
import {recordModeState} from '../../atoms/recordMode';
import {IAsideListItem} from 'components/Aside/AsideList'

const Settings = () => {
    // TODO: 다크모드, 검색기록, 계정, 초기화 함수 만들기
    const [themeMode, setThemeMode] = useRecoilState(themeModeState);
    const [recordMode, setRecordMode] = useRecoilState(recordModeState);
    const [selectedIndex, setSelectedIndex] = useState(0); 

    const asideMenuList: IAsideListItem[] = [
        {
            title: '다크모드',
            onClick: setSelectedIndex,
        },
        {
            onClick: setSelectedIndex,
            title: '검색 기록',
        },
        {
            onClick: setSelectedIndex,
            title: '초기화',
        },
    ];
    

    const settingsMenuList = [
        {
            title: '다크모드',
            data: [
                {
                    label: '다크모드 사용',
                    button: <ToggleButton clicked={themeMode === 'DARK'} onClick={() => {
                        setThemeMode(prev => {
                            const nextTheme = prev === 'DARK' ? 'LIGHT' : 'DARK';
                            localStorage.setItem('theme', nextTheme);
                            return nextTheme;
                        });
                    }} />
                }
            ],
        },
        {
            title: '검색 기록',
            data: [
                {
                    label: '검색 기록하기',
                    button: <ToggleButton clicked={recordMode} onClick={() => {
                        setRecordMode(prev => {
                            localStorage.setItem('record', JSON.stringify(!prev));
                            return !prev;
                        });
                    }} />
                },
                {
                    label: '검색 기록 삭제',
                    button: <Destructive size="sm">삭제</Destructive>
                },
            ],
        },
        {
            title: '초기화',
            data: [
                {
                    label: '관심 목록 지우기',
                    button: <Destructive size="sm">삭제</Destructive>
                },
                {
                    label: '모든 정보 지우기',
                    button: <Destructive size="sm">삭제</Destructive>
                },
            ]
        }
    ]

    return (
        <>
            <Aside data={asideMenuList} selectedIndex={selectedIndex} />
            <Styled.SettingsContainer>
                {
                    settingsMenuList.map((tab, index) => (
                        <Styled.MenuTab data={tab.data} title={tab.title} key={tab.title} selected={selectedIndex === index} />
                    ))
                }
            </Styled.SettingsContainer>
        </>

    )
}

export default Settings;

