import {Children} from 'react';
import {screen, fireEvent} from '@testing-library/react';
import {renderWithWrapper} from 'tests';
import Input from './index';
import {recordHistoryState} from 'atoms';
import {useRecoilState} from 'recoil';

describe("<Input />", () => {
    it('정상적으로 렌더링 되는지 확인한다', () => {
        const fn = jest.fn();
        const {container} = renderWithWrapper(
            <Input onClickHistoryItem={fn}/>
        );
        const input = screen.getByRole('textbox');
        const form = input.parentElement;

        expect(input).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        expect(container).toMatchSnapshot();

    })

    it('props에 따라 정상렌더링되는지 확인한다', () => {
        const fn = jest.fn();
        const {container} = renderWithWrapper(
            <Input
                iconVisible={true}
                onClickHistoryItem={fn}
             />
        );
        
        const input = screen.getByRole('textbox');
        fireEvent.focus(input)
        const icon = screen.getByTestId('icon');
        expect(icon).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    })
});