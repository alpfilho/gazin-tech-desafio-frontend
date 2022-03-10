import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './moviePoster.stories';

const { Default } = composeStories(stories);

describe('MoviePoster', () => {
	it('render a movie poster', () => {
		render(<Default />);

		const moviePoster = screen.getByRole('img');
		expect(moviePoster).toBeInTheDocument();
	});

	it('movie poster render unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
