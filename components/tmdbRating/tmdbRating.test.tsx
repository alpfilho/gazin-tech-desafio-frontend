import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './tmdbRating.stories';

const { Default } = composeStories(stories);

describe('Tmdb Rating', () => {
	it('render a Tmdb rating', () => {
		render(<Default />);

		const ratingText = screen.getByText('0');
		expect(ratingText).toBeInTheDocument();
	});

	it('Tmdb rating render unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
