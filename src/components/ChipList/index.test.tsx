import {screen, fireEvent} from '@testing-library/react';
import {renderWithWrapper} from 'tests';
import ChipList from './index';
import {lightTheme} from 'styles/theme';

describe('<ChipList />', () => {
    const data = ['a','b','c'];
    const emptyData: string[] = [];

    it('정상적으로 렌더링 되는지 확인', () => {
        const {container} = renderWithWrapper(
            <ChipList 
                data={data}
            />
        )
        const chip = screen.getByText(data[0]);
        const chipList = chip.parentElement;
        expect(chipList).toBeInTheDocument();
        expect(chip).toBeInTheDocument();
        expect(chipList?.childElementCount).toBe(data.length);
        expect(container).toMatchSnapshot();
    });

    it('ChipList의 스타일이 정상적으로 렌더링 되었는지 확인한다.', () => {
        renderWithWrapper(
            <>
                <ChipList 
                    data={data}
                />
            </>
        )
        const chip = screen.getByText(data[0]);
        const chipList = chip.parentElement;
        expect(chipList).toHaveStyle({
            display: 'flex',
            'flex-wrap': 'wrap',
            'gap': '8px',
            'margin-bottom': '10px',
        });
    });

    it('Chip의 스타일이 정상적으로 렌더링 되었는지 확인한다', () => {
        renderWithWrapper(
            <>
                <ChipList 
                    data={data}
                    selectedItem={data[1]}
                />
            </>
        )
        const chip = screen.getByText(data[0]);
        const selectedChip = screen.getByText(data[1]);
        expect(chip).toHaveStyle({
            padding: '5px 10px',
            'max-width': '150px',
            'text-align': 'center',
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
            'white-space': 'nowrap',
            'border-radius': '20px',
            border: `1px solid ${lightTheme.border2}`,
            cursor: 'pointer',

            background: 'white',
            color: '#333',
        });

        expect(selectedChip).toHaveStyle({
            background: lightTheme.primary,
            color: 'white',
        })
    });

    it('Message가 정상적으로 렌더링되는지 확인한다', () => {
        renderWithWrapper(<ChipList 
            data={emptyData}
        />);
        
        const message = screen.getByText('관심 목록을 추가해주세요~');
        expect(message).toBeInTheDocument();
        expect(message).toHaveStyle({
            color: lightTheme.text1
        });
    })

    it('click 이벤트가 정상동작하는지 확인한다', () => {
        const fn = jest.fn();
        renderWithWrapper(<ChipList data={data} onClick={fn} />);
        const chip = screen.getByText(data[0]);
        expect(fn).toHaveBeenCalledTimes(0);
        fireEvent.click(chip);
        expect(fn).toHaveBeenCalledTimes(1);
    })
})