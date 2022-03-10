import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './sliderControl.stories';

const { Left, Right } = composeStories(stories);

describe('SliderControl', () => {
	it('render a left slider control', () => {
		render(<Left />);

		const sliderControl = screen.getByTestId('slider-control');
		expect(sliderControl).toBeInTheDocument();
	});

	it('left slider control render unchanged', () => {
		const { container } = render(<Left />);

		expect(container).toMatchSnapshot();
	});

	it('render a right slider control', () => {
		render(<Right />);

		const sliderControl = screen.getByTestId('slider-control');
		expect(sliderControl).toBeInTheDocument();
	});

	it('Right slider control render unchanged', () => {
		const { container } = render(<Right />);

		expect(container).toMatchSnapshot();
	});
});
