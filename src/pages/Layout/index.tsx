import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import * as Styled from './styles';

const Layout = () => {
	return (
		<Styled.Container>
			<Header />
			<Styled.Main>
				<Outlet />
			</Styled.Main>
		</Styled.Container>
	);
};

export default Layout;