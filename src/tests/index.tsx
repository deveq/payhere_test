import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { lightTheme } from 'styles/theme';
import { RecoilRoot } from 'recoil';
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query';
import {BrowserRouter} from 'react-router-dom';

export const renderWithWrapper = (component: ReactElement, options?: any) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				suspense: true,
				useErrorBoundary: true,
			},
		},
	});
	const Wrapper = ({ children }: { children: ReactElement }) => (
		<RecoilRoot>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider theme={lightTheme}>
						<GlobalStyle />
						{children}
					</ThemeProvider>
				</QueryClientProvider>
			</BrowserRouter>
		</RecoilRoot>
	);

	return render(component, { wrapper: Wrapper, ...options });
};
