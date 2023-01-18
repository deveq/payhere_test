import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import {
	QueryClient,
	QueryClientProvider,
	QueryErrorResetBoundary,
} from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			suspense: true,
			useErrorBoundary: true,
		},
	},
});

root.render(
	// <React.StrictMode>
		<QueryErrorResetBoundary>
			{({ reset }) => (
				<ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
					<BrowserRouter>
						<RecoilRoot>
							<QueryClientProvider client={queryClient}>
								<App />
							</QueryClientProvider>
						</RecoilRoot>
					</BrowserRouter>
				</ErrorBoundary>
			)}
		</QueryErrorResetBoundary>
	// </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
