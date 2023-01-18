import {screen} from '@testing-library/react';
import {renderWithWrapper} from 'tests';
import Layout from './index';
import {lightTheme} from 'styles/theme';
import 'jest-styled-components';

describe('<Layout />', () => {
    it('정상적으로 렌더링되었는지 확인한다.', () => {
        const {container} = renderWithWrapper(<Layout />);
        const layout = container.children[0];

        expect(layout).toHaveStyleRule(
            'background',
            lightTheme.bg_page3
        );
    })
})