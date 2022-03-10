import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './listActors.stories';

const { Default } = composeStories(stories);

describe('ListActors', () => {
	it('render a actors list', () => {
		render(<Default />);

		const actorsImgArray = screen.getAllByRole('img');
		expect(actorsImgArray.length).toBe(20);
	});

	it('actors list render unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
