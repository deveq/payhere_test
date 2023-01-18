import {screen} from '@testing-library/react';
import {renderWithWrapper} from 'tests';
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
});