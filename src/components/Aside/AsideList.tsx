import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styles';

interface AsideListProps {
	data: IAsideListItem[];
	selectedIndex: number;
	
}
export interface IAsideListItem {
	title: string;
	onClick: (index: number) => void;
	selected?: boolean;
}



const AsideList = ({data, selectedIndex}: AsideListProps) => {
	return (
		<>
			<Styled.List>
				{data.map((item, index) => (
					<Styled.ListItem
                        key={item.title}
						onClick={() => {
							item.onClick(index);
							// setSelectedIndex(index);
						}}
						selected={selectedIndex === index}
					>
						{item.title}
					</Styled.ListItem>
				))}
			</Styled.List>
		</>
	);
};

export default AsideList;
