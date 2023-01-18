import {useState} from 'react';
import {render} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import 'jest-styled-components';
import {renderWithWrapper} from 'tests';
import Aside from './index';

// interface AsideProps {
//     data: string[];
//     title: string;
//     setIndex: Dispatch<SetStateAction<number>>;
//     index: number;
// }

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

// export const Aside = styled.aside`
//     background: ${({theme}) => theme.bg_page1};
// `;

// export const List = styled.ul`
// `;

// export const Title = styled.h2`
//     border-bottom: ${({theme}) => `1px solid ${theme.bg_element4}`};
//     color: ${({theme}) => theme.text1};
// `;

// export const ListItem = styled.li<{selected: boolean}>`
//     background: ${({selected,theme}) => selected ? theme.bg_element1 : 'transparent'};
//     color: ${({selected, theme}) => selected ? theme.text2 : theme.text3};
//     &:hover,
//     &:active {
//         background: ${({theme}) => theme.bg_element1};
//     };
// `;

// export const Subtitle = styled.div`

// `;