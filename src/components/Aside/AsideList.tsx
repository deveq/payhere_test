import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styles';
import {useRecoilState} from 'recoil';
import {asideSelectedIndex} from 'atoms/asideSelectedIndex';

interface AsideListProps {
	data: string[];
}
export interface IAsideListItem {
	title: string;
}



const AsideList = ({data}: AsideListProps) => {
	const [selectedIndex, setSelectedIndex] = useRecoilState(asideSelectedIndex);
	return (
		<>
			<Styled.List>
				{data.map((item, index) => (
					<Styled.ListItem
                        key={item}
						onClick={() => {
							setSelectedIndex(index);
						}}
						selected={selectedIndex === index}
					>
						{item}
					</Styled.ListItem>
				))}
			</Styled.List>
		</>
	);
};

export default AsideList;
