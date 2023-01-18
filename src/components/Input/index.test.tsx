import {Children} from 'react';
import {screen, fireEvent} from '@testing-library/react';
import {renderWithWrapper} from 'tests';
import Input from './index';
import {recordHistoryState} from 'atoms';
import {useRecoilState} from 'recoil';

describe("<Input />", () => {
    it('정상적으로 렌더링 되는지 확인한다', () => {
        const {container} = renderWithWrapper(
            <Input />
        );

        // const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
        const form = input.parentElement;
        // const history = screen.findByRole('list');

        expect(input).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        // expect(history).toBeInTheDocument();
        expect(container).toMatchSnapshot();

    })

    it('props에 따라 정상렌더링되는지 확인한다', () => {

        const {container} = renderWithWrapper(
            <Input
                iconVisible={true}
             />
        );
        
        const input = screen.getByRole('textbox');
        fireEvent.focus(input)
        const icon = screen.getByTestId('icon');
        expect(icon).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    })
})

// export const Container = styled.form`
// 	border: 1px solid ${({ theme }) => theme.border3};
// 	background: ${({ theme }) => theme.bg_element1};
// `;

// export const Input = styled.input`
// 	color: ${({ theme }) => theme.text1};
// 	background: ${({ theme }) => theme.bg_element1};
// `;

// export const Icon = styled(FiSearch)`
// 	color: ${({ theme }) => theme.text1};
// 	&:hover,
// 	&:active {
// 		opacity: 0.6;
// 	}
// `;

// export const History = styled.ul<HistoryProps>`
// 	display: ${({ show }) => (show ? 'flex' : 'none')};
// 	background: ${({ theme }) => theme.bg_element1};
// 	height: ${({ children }) => `${Children.count(children) * 40}`}px;
// 	box-shadow: ${({ theme }) => theme.boxShadow};
// `;

// export const HistoryItem = styled.li`
// 	color: ${({ theme }) => theme.text1};
// 	&:hover {
// 		opacity: 0.6;
// 	}
// `;
