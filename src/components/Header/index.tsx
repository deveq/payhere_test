import { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import * as Styled from './styles';
import BlindText from '../BlindText';
import Input from 'components/Input';
import { Link, useNavigate } from 'react-router-dom';
import NavMenu, { ILinkList } from '../NavMenu';
import {useSetRecoilState} from 'recoil';
import {recordHistoryState} from 'atoms';

const navMenuList: ILinkList[] = [
	{ title: 'issue', to: '/' },
	{ title: 'repositories', to: '/repositories' },
	{ title: 'settings', to: '/settings' },
];

const Header = () => {
	const [text, setText] = useState('');
	const navigate = useNavigate();
	const setRecordHistory = useSetRecoilState(recordHistoryState);

	const onChangeText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	}, [setText]);

	const onClickHistoryItem = useCallback((text: string) => {
		navigate({
			pathname: '/repositories',
			search: `?query=${text}`,
		});
	}, [navigate]);

	const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
		// form태그의 onSubmit을 통해 input의 value를 받아오려하였지만
		// HTMLFormElement에는 search라는 name을 가진 프로퍼티가 없으므로
		// 캐스팅을 통해 추가해준다
		const target = event.target as typeof event.target & {
			search: HTMLInputElement,
		}
		const text = target.search.value;
		if (text) {
			setRecordHistory(prev => {
				if (prev.includes(text)) {
					// 중복체크
					return prev;
				}
				const nextHistory = [...prev];

				if (nextHistory.length === 3) {
					// history가 3개 일 경우 가장 오래된 history를 pop한다
					nextHistory.pop();
				}
				
				// 새롭게 추가되는 history를 unshift로 넣어준다
				nextHistory.unshift(text);
				return nextHistory;
			})
			navigate({
				pathname: '/repositories',
				search: `?query=${text}`,
			});
		}

	}, [setRecordHistory, navigate]);

	return (
		<Styled.Container>
			<Styled.Headline>
				<Link to="/">
					<Styled.Logo />
					<BlindText>페이히어</BlindText>
				</Link>
			</Styled.Headline>
			<Input
				placeholder="검색어를 입력해주세요"
				value={text}
				onChange={onChangeText}
				onSubmit={onSubmit}
				onClickHistoryItem={onClickHistoryItem}
			/>
			<Styled.Nav>
				<NavMenu list={navMenuList} />
			</Styled.Nav>
		</Styled.Container>
	);
};

export default Header;
