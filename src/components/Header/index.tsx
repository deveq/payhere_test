import { useState, ChangeEvent } from 'react';
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

	const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	}
	const onClickHistoryItem = (text: string) => {
		navigate({
			pathname: '/repositories',
			search: `?query=${text}`,
		});
	};

	const onSubmit = () => {
		if (text) {
			setRecordHistory(prev => {
				if (prev.includes(text)) {
					return prev;
				}
				const nextHistory = [...prev];

				if (nextHistory.length === 3) {
					nextHistory.shift();
				}
				nextHistory.push(text);
				return nextHistory;
			})
			navigate({
				pathname: '/repositories',
				search: `?query=${text}`,
			});
		}
	};
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
