import { Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Layout from 'pages/Layout';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/theme';
import { themeModeState } from 'atoms/themeMode';

function App() {
	const themeMode = useRecoilValue(themeModeState);
	return (
		<ThemeProvider theme={themeMode === 'DARK' ? darkTheme : lightTheme} >
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Layout />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
