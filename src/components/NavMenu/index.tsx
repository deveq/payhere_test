import * as Styled from './styles';

export interface ILinkList {
	to: string;
	title: string;
}

interface NavMenuProps {
	list: ILinkList[];
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
