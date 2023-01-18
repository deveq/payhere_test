import {screen} from '@testing-library/react';
import {renderWithWrapper} from 'tests';
import {lightTheme} from 'styles/theme';
import ToggleButton from './index';
import 'jest-styled-components';

describe('<ToggleButton />', () => {
    it('정상적으로 렌더링 되었는지 확인한다', () => {
        const fn = jest.fn();
        const clicked = false;
        const {container} = renderWithWrapper(<ToggleButton 
            onClick={fn}
            clicked={clicked}
        />);

        const toggleButton = screen.getByTitle('toggleButton');
        expect(toggleButton).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    })

    it('props에 따라 정상적으로 렌더링 되었는지 확인한다', () => {
        const fn1 = jest.fn();
        const fn2 = jest.fn();
        renderWithWrapper(
        <>
        <ToggleButton 
            onClick={fn1}
            clicked={false}
        />
        <ToggleButton 
            onClick={fn2}
            clicked={true}
        />
        </>
        );

        const [falseButton, trueButton] = screen.getAllByTitle('toggleButton');
        expect(falseButton).toBeInTheDocument();
        expect(trueButton).toBeInTheDocument();
        expect(falseButton).toHaveStyleRule(
            'background',
            'gray'
        );
        expect(trueButton).toHaveStyleRule(
            'background',
            '#05c3a7'
        );

        expect(falseButton.children[1]).toHaveStyle({
            background: 'whitesmoke',
            border: '2px solid gray',
        });

        expect(trueButton.children[1]).toHaveStyle({
            background: 'white',
            border: '2px solid #05c3a7',
        });

        expect(falseButton.children[0]).toHaveStyle({
            flex: 0
        });

        expect(trueButton.children[0]).toHaveStyle({
            flex: 1,
        });

    })
})