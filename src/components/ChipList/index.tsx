import * as Styled from './styles';

interface ChipListProps {
	data: string[];
	onClick?: (text: string) => void;
    selectedItem?: string;
}

const ChipList = ({ data, onClick, selectedItem }: ChipListProps) => {
	return (
		<Styled.ChipList>
			{
				data.length !== 0  ?(
					data.map((item) => (
						<Styled.Chip
							key={item}
							selected={selectedItem === item}
							onClick={() => {
								if (onClick) onClick(item);
							}}
						>
							{item}
						</Styled.Chip>
					))
				) : (
					<Styled.Message>관심 목록을 추가해주세요~</Styled.Message>
				)
			}
		</Styled.ChipList>
	);
};

export default ChipList;
