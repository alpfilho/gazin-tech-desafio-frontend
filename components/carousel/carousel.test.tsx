import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './carousel.stories';

const { WithActors, WithMovies } = composeStories(stories);

describe('Carousel', () => {
	it('render a carousel with movies', () => {
		render(<WithMovies />);

		const moviesImgArray = screen.getAllByRole('img');
		expect(moviesImgArray.length).toBe(20);
	});

	it('render movies carousel unchanged', () => {
		const { container } = render(<WithMovies />);

		expect(container).toMatchSnapshot();
	});

	it('render a carousel with actors', () => {
		render(<WithActors />);

		const actorsImgArray = screen.getAllByRole('img');
		expect(actorsImgArray.length).toBe(20);
	});

	it('render actors carousel unchanged', () => {
		const { container } = render(<WithActors />);

		expect(container).toMatchSnapshot();
	});
});
