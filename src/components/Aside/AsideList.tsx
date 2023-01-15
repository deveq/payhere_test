import { useState } from 'react';
import * as Styled from './styles';

export interface AsideListProps {
	data: IAsideListItem[];
}

export interface IAsideListItem {
	title: string;
	onClick: (index: number) => void;
	selected?: boolean;
}

const AsideList = ({ data }: AsideListProps) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<>
			<Styled.List>
				{data.map((item, index) => (
					<Styled.ListItem
                        key={item.title}
						onClick={() => {
							item.onClick(index);
							setSelectedIndex(index);
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
