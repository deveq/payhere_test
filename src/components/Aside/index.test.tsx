import {useState} from 'react';
import {render} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import 'jest-styled-components';
import {renderWithWrapper} from 'tests';
import Aside from './index';

describe('<Aside />', () => {
    const data = ['a', 'b', 'c', 'd'];
    const titleText = 'title'
    it('정상적으로 렌더링되는지 확인한다.', () => {
        const {result: {current: [index, setIndex]}} = renderHook(() => useState(0))
        const {container} = renderWithWrapper(<Aside 
            data={data}
            title={titleText}
            setIndex={setIndex}
            index={index}
        />);

        const aside = container.children[0];
        expect(aside).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    })
})