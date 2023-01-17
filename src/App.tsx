import { Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/theme';
import { themeModeState } from 'atoms/themeMode';
import Layout from 'pages/Layout';
import Repositories from 'pages/Repositories';
import Settings from 'pages/Settings';
import Issues from 'pages/Issues';
import {} from 'react-query';

function App() {
	const themeMode = useRecoilValue(themeModeState);
	return (
		<ThemeProvider theme={themeMode === 'DARK' ? darkTheme : lightTheme} >
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Issues />} />
					<Route path="/repositories" element={<Repositories />} />
					<Route path="/settings" element={<Settings />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
