import {useState, ReactElement} from 'react';
import ToggleButton from 'components/ToggleButton';
import Button, {Destructive, Primary} from 'components/Button';
import * as Styled from './styles';


const data = [
    {
        title: '다크모드',
        data: [
            {
                label: '다크모드 사용',
                button: <ToggleButton clicked={true} onClick={() => {console.log('aa')}} />
            }
        ],
    },
    {
        title: '검색 기록',
        data: [
            {
                label: '검색 기록하기',
                button: <ToggleButton clicked={true} onClick={() => {console.log('aa')}} />
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

const Settings = () => {
    // TODO: 다크모드, 검색기록, 계정, 초기화 함수 만들기
    return (
        <Styled.SettingsContainer>
            {
                data.map(tab => (
                    <Styled.MenuTab data={tab.data} title={tab.title} key={tab.title} />
                ))
            }
        </Styled.SettingsContainer>

    )
}

export default Settings;

