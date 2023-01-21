import {Children} from 'react';
import styled from 'styled-components';

interface HistoryProps {
	show?: boolean;
}

export const History = styled.ul<HistoryProps>`
	display: ${({ show }) => (show ? 'flex' : 'none')};
	position: absolute;
	top: 45px;
	background: ${({ theme }) => theme.bg_element1};
	width: 100%;
	height: ${({ children }) => `${Children.count(children) * 40}`}px;
	border-radius: 10px;
	z-index: 10;
	box-shadow: ${({ theme }) => theme.boxShadow};
	padding: 10px 20px;
	box-sizing: border-box;
	flex-direction: column;
	justify-content: space-around;
`;

export const HistoryItem = styled.li`
	color: ${({ theme }) => theme.text1};
	font-size: 18px;
	display: flex;
	justify-content: space-between;
	max-width: 90%;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	&:hover {
		opacity: 0.6;
	}
	cursor: pointer;
`;
