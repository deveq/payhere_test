
import {screen, fireEvent} from '@testing-library/react';
import {useState} from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';
import {renderWithWrapper} from 'tests';
import Pagination from './index';

describe('<Pagination />', () => {
    it('정상적으로 렌더링되었는지 확인한다', () => {
        const {result: {current: [page, setPage]}} = renderHook(() => useState(1));
        const {container} = renderWithWrapper(<Pagination 
            total={132}
            page={page}
            setPage={setPage}
            limit={10}
            onlyArrow={true}
        />);

        const pagination = screen.getByRole('navigation');
        expect(pagination).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    })
    
    it('only Arrow Pagination이 정상렌더링 되는지 확인한다', () => {
        // const {result: {current: [page, setPage]}} = renderHook(() => useState(1));
        const {result} = renderHook(() => useState(1));
        const [page, setPage] = result.current;
        const {container} = renderWithWrapper(<Pagination 
            total={132}
            page={page}
            setPage={setPage}
            limit={10}
            onlyArrow={true}
        />);
    
        const pagination = screen.getByRole('navigation');
        const prevButton = screen.getByText('이전 페이지');
        const nextButton = screen.getByText('다음 페이지');

        expect(pagination.childElementCount).toBe(2);

        expect(prevButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
    })

    it('page를 11이상으로 변경한다.', () => {
        const {result: {current: [page, setPage]}} = renderHook(() => useState(12));
        
        renderWithWrapper(<Pagination
            limit={10}
            page={page}
            setPage={setPage}
            total={638}
        />)

        const pagination = screen.getByRole('navigation');
        // const buttons = screen.getAllByRole('button');
        const button = screen.getByText(13);
        userEvent.click(button);

        expect(pagination).toBeInTheDocument();
    })
})

// export interface PaginationProps {
// 	onlyArrow?: boolean;
// }

// interface PageButtonProps {
//   selected?: boolean;
//   hide?: boolean;
// }

// export const Container = styled.nav`
// `;

// export const PageButton = styled.button<PageButtonProps>`
//   background: ${({theme, selected}) => selected ? theme.primary : 'transparent'};
//   color: ${({theme, selected}) => selected ? 'white' : theme.text1};
//   visibility: ${({hide}) => hide ? 'hidden' : 'visible'};
//   &:hover {
//     transform: translateY(-2px);
//     cursor: pointer;
//   }
//   &[disabled] {
//     cursor: revert;
//     transform: revert;
//   }
// `;
