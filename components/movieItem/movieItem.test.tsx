import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './movieItem.stories';

const { Default } = composeStories(stories);

describe('MovieItem', () => {
	it('render a movie item', () => {
		render(<Default />);

		const movieTitle = screen.getByText('Homem de Ferro e Hulk - Super-Heróis Unidos');
		const movieRelease = screen.getByText('2013');
		expect(movieTitle).toBeInTheDocument();
		expect(movieRelease).toBeInTheDocument();
	});

	it('movie item render unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
