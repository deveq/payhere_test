import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Aside from 'components/Aside';
import styled from 'styled-components';

const Layout = () => {
	return (
		<Container>
			<Header />
			<Main>
				<Outlet />
			</Main>
		</Container>
	);
};

export default Layout;

const Container = styled.div`
	background: ${({theme}) => theme.bg_page3};
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const Main = styled.main`
	display: flex;
	flex: 1;
`;