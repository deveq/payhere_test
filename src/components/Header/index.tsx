import { useState, ChangeEvent } from 'react';
import * as Styled from './styles';
import BlindText from '../BlindText';
import Input from 'components/Input';
import { Link, useNavigate } from 'react-router-dom';
import NavMenu, { ILinkList } from '../NavMenu';
import Button from '../Button';

const navMenuList: ILinkList[] = [
	{ title: 'issue', to: '/' },
	{ title: 'repositories', to: '/repositories' },
	{ title: 'settings', to: '/settings' },
];

const Header = () => {
	const [text, setText] = useState('');
	const navigate = useNavigate();
	const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	}
	const onSubmit = () => {
		if (text) {
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
			/>
			<Styled.Nav>
				<NavMenu list={navMenuList} />
			</Styled.Nav>
			<Styled.LoginContainer>
				<Button>로그인</Button>
			</Styled.LoginContainer>
		</Styled.Container>
	);
};

export default Header;
