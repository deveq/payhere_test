import {ReactElement} from 'react';
import { render } from '@testing-library/react';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { lightTheme } from 'styles/theme';

export const renderWithWrapper = (component: ReactElement, options?: any) => {
  const Wrapper = ({ children }: {children: ReactElement}) => (
    <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
  );

  return render(component, { wrapper: Wrapper, ...options });
}