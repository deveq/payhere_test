import {screen, fireEvent} from '@testing-library/react';
import {renderWithWrapper} from 'tests';
import 'jest-styled-components'
import Header from './index';
import {lightTheme} from 'styles/theme';

describe('<Header />', () => {
    it('정상적으로 렌더링되는지 확인한다', () => {
        const {container} = renderWithWrapper(<Header />);

        const header = container.children[0];
        const headline = header.children[0];
        const input = header.children[1];
        const nav = header.children[2];

        expect(header).toBeInTheDocument();
        expect(headline).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(nav).toBeInTheDocument();

        const blindText = screen.getByText('페이히어');
        expect(blindText).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('자식 컴포넌트들이 정상렌더링 되는지 확인 한다', () => {
        const {container} = renderWithWrapper(<Header />);

        const header = container.children[0];
        const headline = header.children[0];
        const input = header.children[1];
        const nav = header.children[2];

        expect(header).toBeInTheDocument();
        expect(headline).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(nav).toBeInTheDocument();

        const logo = screen.getByTestId('icon');
        expect(logo).toBeInTheDocument();

        const blindText = screen.getByText('페이히어');
        expect(blindText).toBeInTheDocument();

        expect(header).toHaveStyle({
            background: lightTheme.bg_page1,
            'box-shadow': lightTheme.boxShadow,
        });
    })

    it('이벤트이벤트', () => {
        const {container} = renderWithWrapper(<Header />);

        const header = container.children[0];
        const input = header.children[1];

        expect(input).toBeInTheDocument();
        
        fireEvent.change(input.children[0], { target: { value: 'test' } });
        expect(input.children[0]).toHaveValue('test');
        // fireEvent.submit(input);
        // TODO: recordHistory가 변경되었는지 조회하기
    })
})