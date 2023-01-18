import { screen, fireEvent } from '@testing-library/react';
import { renderWithWrapper } from 'tests';
import Item from './index';
import { lightTheme } from 'styles/theme';
import 'jest-styled-components';

describe('<Item />', () => {
	const titleText = 'title';
	const metaText = 'meta';
	const descriptionText = 'description';
	const lowerInfoText = 'lower';
	const upperInfoText = 'upper';

	it('정상적으로 렌더링되는지 확인한다', () => {
		const onClick = () => {};
		const { container } = renderWithWrapper(
			<Item onClick={onClick} title={titleText} meta={metaText} />,
		);

		const item = screen.getByRole('listitem');
		expect(item).toBeInTheDocument();
		expect(item).toHaveStyle({
			background: lightTheme.bg_page2,
			border: `1px solid ${lightTheme.border3}`,
		});
		expect(container).toMatchSnapshot();
	});

	it('props에 따라 정상적으로 렌더링되는지 확인한다', () => {
		const onClick = () => {};
		renderWithWrapper(
			<Item
				onClick={onClick}
				title={titleText}
				meta={metaText}
				description={descriptionText}
				lowerInfo={lowerInfoText}
				upperInfo={upperInfoText}
			/>,
		);

		const title = screen.getByText(titleText);
		const meta = screen.getByText(metaText);
		const description = screen.getByText(descriptionText);
		const lowerInfo = screen.getByText(lowerInfoText);
		const upperInfo = screen.getByText(upperInfoText);

		expect(title).toBeInTheDocument();
		expect(meta).toBeInTheDocument();
		expect(description).toBeInTheDocument();
		expect(lowerInfo).toBeInTheDocument();
		expect(upperInfo).toBeInTheDocument();

		expect(meta).toHaveStyleRule('color', lightTheme.text2);

		expect(lowerInfo).toHaveStyleRule('color', lightTheme.text2);

		expect(title).toHaveStyleRule('color', lightTheme.primary);

		expect(description).toHaveStyleRule('color', lightTheme.text1);
	});

	it('click 이벤트가 정상동작하는지 확인한다', () => {
		const fn = jest.fn();
		renderWithWrapper(<Item title={titleText} meta={metaText} onClick={fn} />);
		expect(fn).toHaveBeenCalledTimes(0);
		const title = screen.getByText(titleText);
		fireEvent.click(title);
		expect(fn).toHaveBeenCalledTimes(1);
	});
});
