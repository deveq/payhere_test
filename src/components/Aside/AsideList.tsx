import { Dispatch, SetStateAction } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styles';
import {useRecoilState} from 'recoil';
import {asideSelectedIndex} from 'atoms/asideSelectedIndexState';

interface AsideListProps {
	data: string[];
	index: number;
	setIndex: Dispatch<SetStateAction<number>>;
}
export interface IAsideListItem {
	title: string;
}

const AsideList = ({data, index, setIndex}: AsideListProps) => {
	return (
		<>
			<Styled.List>
				{data.map((item, itemIndex) => (
					<Styled.ListItem
                        key={item}
						onClick={() => {
							setIndex(itemIndex);
						}}
						selected={index === itemIndex}
					>
						{item}
					</Styled.ListItem>
				))}
			</Styled.List>
		</>
	);
};

export default AsideList;
