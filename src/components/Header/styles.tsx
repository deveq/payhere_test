import styled from 'styled-components';
import { ReactComponent } from 'assets/logo.svg';
import {flexCenter} from 'styles/helper';

export const Container = styled.header`
	display: flex;
	padding: 1rem 2rem;
	background: ${({theme}) => theme.bg_page1};
	box-shadow: ${({theme}) => theme.boxShadow};
	position: relative;
	z-index: 10;
`;

export const Logo = styled(ReactComponent)`
	${flexCenter};
	width: 50px;
	height: 50px;
	path {
		opacity: ${({theme}) => theme.opacity1};
	}

	path:nth-child(1) {
		fill: ${({theme}) => theme.path1};
	}
	path:nth-child(2) {
		opacity: ${({theme}) => theme.opacity2};
		fill: ${({theme}) => theme.path2};
	}
	path:nth-child(3) {
		fill: ${({theme}) => theme.path3};
	}
	
`;

export const Headline = styled.h1`
`;

export const Nav = styled.nav`
	flex: 1;
	${flexCenter};
`;

export const LoginContainer = styled.div`

`;