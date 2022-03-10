import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './listFilms.stories';

const { Default } = composeStories(stories);

describe('ListFilms', () => {
	it('render a movies list', () => {
		render(<Default />);

		const moviesImgArray = screen.getAllByRole('img');
		expect(moviesImgArray.length).toBe(20);
	});

	it('movies list render unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
