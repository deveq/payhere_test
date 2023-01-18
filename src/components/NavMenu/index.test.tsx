import {screen} from '@testing-library/react';
import {renderWithWrapper} from 'tests';
import {lightTheme} from 'styles/theme';
import NavMenu from './index';

describe('<NavMenu />', () => {
    const data = [
        {title: 'title1', to: 'to1'},
        {title: 'title2', to: 'to2'},
        {title: 'title3', to: 'to3'},
    ]
    it('정상적으로 렌더링되었는지 확인한다', () => {
        const {container} = renderWithWrapper(<NavMenu list={data} />);

        const list = screen.getByRole('list');
        expect(list).toBeInTheDocument();
        expect(list.childElementCount).toBe(data.length);
        expect(container).toMatchSnapshot();
    })
})


// export const List = styled.ul`
// `;

// export const ListItem = styled.li`
// `
// export const Link = styled(NavLink)`
//     color: ${({theme}) => theme.text1};
//     &:hover {
//         opacity: 0.6;
//     }
//     &.active {
//         font-weight: bold;
//         text-decoration: underline;
//     }
// `;
