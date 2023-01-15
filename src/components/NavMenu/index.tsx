import * as Styled from './styles';

export interface List {
	to: string;
	title: string;
}

interface NavMenuProps {
	list: List[];
}

const NavMenu = ({ list }: NavMenuProps) => {
	return (
		<Styled.List>
			{list.map((item) => (
				<Styled.ListItem key={item.title}>
					<Styled.Link to={item.to}>{item.title}</Styled.Link>
				</Styled.ListItem>
			))}
		</Styled.List>
	);
};

export default NavMenu;
