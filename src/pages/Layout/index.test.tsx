import {screen} from '@testing-library/react';
import {renderWithWrapper} from 'tests';
import Layout from './index';
import {lightTheme} from 'styles/theme';
import 'jest-styled-components';

describe('<Layout />', () => {
    it('정상적으로 렌더링되었는지 확인한다.', () => {
        const {container} = renderWithWrapper(<Layout />);
        const layout = container.children[0];
        // const header = layout.children[0];
        // const main = layout.children[1];

        expect(layout).toHaveStyleRule(
            'background',
            lightTheme.bg_page3
        );
    })
})

// export const RightContainer = styled.div`
//     background: ${({theme}) => theme.bg_page1};
// `;