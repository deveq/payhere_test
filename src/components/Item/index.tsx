import * as Styled from './styles';

interface ItemProps {
	title: string;
	description?: string | null;
	meta: string;
	upperInfo?: string;
	lowerInfo?: string;
	onClick: () => void;
}

const Item = ({ upperInfo, meta, title, lowerInfo, description, onClick }: ItemProps) => {
	return (
		<Styled.Container>
			<Styled.TopInfo>{upperInfo}</Styled.TopInfo>
			<Styled.Body>
				<Styled.Title onClick={onClick}>{title}</Styled.Title>
				<Styled.Description>{description}</Styled.Description>
			</Styled.Body>
			<Styled.BottomInfo>{lowerInfo}</Styled.BottomInfo>
			<Styled.Meta>{meta}</Styled.Meta>
		</Styled.Container>
	);
};

export default Item;
