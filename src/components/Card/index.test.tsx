import {screen} from '@testing-library/react';
import {renderWithWrapper} from 'tests';
import Card from './index';
import {lightTheme} from 'styles/theme';

describe('<Card />', () => {
    const MockEl = () => (
        <div data-testid="mock"/>
    )

    it('정상적으로 렌더링되는지 확인', () => {
        const {container} = renderWithWrapper(<Card>
            <MockEl />
        </Card>);

        const mockEl = screen.getByTestId('mock');
        const card = mockEl.parentElement;
        expect(card).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('정상적으로 렌더링되는지 확인', () => {
        const {container} = renderWithWrapper(<Card>
            <MockEl />
        </Card>);

        const mockEl = screen.getByTestId('mock');
        const card = mockEl.parentElement;
        expect(card).toHaveStyle({
            background: lightTheme.bg_element1,
            'border-radius': '10px',
            padding: '5px 10px',
        })
    })
})