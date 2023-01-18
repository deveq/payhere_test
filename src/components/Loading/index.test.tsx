import {screen} from '@testing-library/react';
import 'jest-styled-components';
import Loading from './index';
import {lightTheme} from 'styles/theme';
import {renderWithWrapper} from 'tests';

describe('<Loading />', () => {
    it('정상적으로 렌더링되는지 확인한다', () => {
        const {container} = renderWithWrapper(<Loading />);

        const icon = screen.getByTestId('icon');
        const loading = icon.parentElement;
        expect(icon).toBeInTheDocument();
        expect(loading).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('정상적으로 렌더링되는지 확인한다', () => {
        renderWithWrapper(<Loading />);

        const icon = screen.getByTestId('icon');
        expect(icon).toHaveStyleRule(
            'color',
            lightTheme.text1,
        );
    });
})