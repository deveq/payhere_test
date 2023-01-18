import { render, screen, fireEvent } from '@testing-library/react';
// jest-styled-components를 import하면 toHaveStyleRule을 사용할 수 있다.
import 'jest-styled-components';
import Button, {Destructive, Primary} from './index';
import {renderWithWrapper} from 'tests';
import {lightTheme} from 'styles/theme';

describe('<Button />', () => {
    const text = 'Button Test';

    it('컴포넌트가 정상적으로 렌더링 되었는지 확인한다', () => {
        const {container} = renderWithWrapper(<Button>{text}</Button>);
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
        expect(container).toMatchSnapshot(); 

    });
    
    it('기본 스타일이 정상적으로 렌더링되는지 확인한다.', () => {
        renderWithWrapper(<Button>{text}</Button>);
        const button = screen.getByText(text);

        expect(button).toHaveStyle({
            'border-radius': '5px',
            'font-weight': 'bold',
            'cursor': 'pointer',
            'padding': '0.75rem 1.5rem',
            'color': lightTheme.text1,
            'border': `1px solid ${lightTheme.border2}`,
        });
    })
    
    it('props에 따라 따라 정상적으로 렌더링 되는가', () => {
        renderWithWrapper(<>
            <Button color='red'>{text}-propsColor</Button>
            <Button showShadow={true}>{text}-shadow</Button>
        </>)

        const colorButton = screen.getByText(`${text}-propsColor`);
        const shadowButton = screen.getByText(`${text}-shadow`);
        expect(colorButton).toHaveStyle({
            color: 'red',
            border: `1px solid ${lightTheme.border2}`,
            'box-shadow': 'none'
        });
        expect(shadowButton).toHaveStyle({
            border: 'none',
            'box-shadow': lightTheme.boxShadow,
        })
    })

    it('size props에 따라 정상적으로 렌더링 되는가', () => {
     
        renderWithWrapper(<>
            <Button size="lg">{text}-lg</Button>
            <Button size="md">{text}-md</Button>
            <Button size="sm">{text}-sm</Button>
        </>);

        const largeButton = screen.getByText(`${text}-lg`);
        const mediumButton = screen.getByText(`${text}-md`);
        const smallButton = screen.getByText(`${text}-sm`);

        expect(largeButton).toBeInTheDocument();
        expect(largeButton).toHaveStyleRule('padding', '1rem 2rem');
        
        expect(mediumButton).toBeInTheDocument();
        expect(mediumButton).toHaveStyleRule('padding', '0.75rem 1.5rem');

        expect(smallButton).toBeInTheDocument();
        expect(smallButton).toHaveStyleRule('padding', '0.5rem 1rem');
    })

    it('hover가 정상동작하는지 확인', () => {
        renderWithWrapper(<>
            <Button>{text}-default</Button>
            <Button backgroundColor={'#cccccc'}>{text}-bgColorProps</Button>
        </>
        );

        const button = screen.getByText(`${text}-default`);
        const bgButton = screen.getByText(`${text}-bgColorProps`);

        expect(button).toHaveStyleRule('background', lightTheme.bg_element2);
        expect(bgButton).toHaveStyleRule('background', '#cccccc');
        expect(button).toHaveStyleRule('background', lightTheme.bg_element3, {
            modifier: ':hover'
        });
        expect(button).toHaveStyleRule('background', lightTheme.bg_element3, {
            modifier: ':active'
        });
    });

    it('click 이벤트가 정상 동작하는지 확인한다', () => {
        const fn = jest.fn();
        renderWithWrapper(<Button onClick={fn}>{text}</Button>);
        const button = screen.getByText(text);
        expect(fn).toHaveBeenCalledTimes(0);
        fireEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);
    })

    it('Destructive, Primary Button이 정상적으로 렌더링되는지 확인한다', () => {
        renderWithWrapper(<>
            <Destructive>{text}-destructive</Destructive>
            <Primary>{text}-primary</Primary>
        </>);

        const destructiveButton = screen.getByText(`${text}-destructive`);
        const primaryButton = screen.getByText(`${text}-primary`);
        
        expect(destructiveButton).toHaveStyle({
            background: lightTheme.destructive,
            border: 'none',
            color: 'white',
        });
        expect(destructiveButton).toHaveStyleRule(
            'background',
            lightTheme.destructive,
            {
                modifier: ':hover'
            }
        );
        expect(destructiveButton).toHaveStyleRule(
            'background',
            lightTheme.destructive,
            {
                modifier: ':active'
            }
        );
        expect(primaryButton).toHaveStyle({
            background: lightTheme.primary,
            color: 'white',
        })

    // export const Destructive = styled(Button)`
    // background-color: ${({theme}) => theme.destructive};
    // color: white;
    // border: none;
    // &:hover,
    // &:active {
    //     background-color: ${({theme}) => theme.destructive};
    // }

    })

})