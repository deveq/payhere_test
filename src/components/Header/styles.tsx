import React from 'react';
import styled from 'styled-components';
import { ReactComponent } from 'assets/logo.svg';
import {flexCenter} from 'styles/helper';


export const Container = styled.header`
	display: flex;
	padding: 1rem 2rem;
	background: ${(props) => props.theme.bg_page1};
	box-shadow: ${(props) => props.theme.boxShadow};
`;

export const Logo = styled(ReactComponent)`
	width: 50px;
	height: 50px;
	${flexCenter};
`;

export const Headline = styled.h1`
`;

export const Nav = styled.nav`
	flex: 1;
	${flexCenter};
`;

export const LoginContainer = styled.div`

`;