import {render, screen} from '@testing-library/react';
import BlindText from './index';

describe('<BlindText />', () => {
    const text = 'Button Test';

    it('컴포넌트가 정상적으로 렌더링 되었는지 확인한다', () => {
        const {container} = render(<BlindText>{text}</BlindText>);
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
        expect(container).toMatchSnapshot(); 
    });

    it('기본 스타일이 정상적으로 렌더링되는지 확인한다.', () => {
        render(<BlindText>{text}</BlindText>);
        const button = screen.getByText(text);
        expect(button).toHaveStyle({
            position: 'absolute',
            clip: 'rect(0 0 0 0)',
            width: '1px',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
        })
    })
})

// const BlindText = styled.span`
//     position: absolute;
//     clip: rect(0 0 0 0);
//     width: 1px;
//     height: 1px;
//     margin: -1px;
//     overflow: hidden;
// `;