import * as Styled from './styles';

interface ChipListProps {
	data: string[];
	onClick?: (text: string) => void;
    selectedItem?: string;
}

const ChipList = ({ data, onClick, selectedItem }: ChipListProps) => {
	return (
		<Styled.ChipList>
			{data.map((item) => (
				<Styled.Chip
					key={item}
					selected={selectedItem === item}
					onClick={() => {
						if (onClick) onClick(item);
					}}
				>
					{item}
				</Styled.Chip>
			))}
		</Styled.ChipList>
	);
};

export default ChipList;
