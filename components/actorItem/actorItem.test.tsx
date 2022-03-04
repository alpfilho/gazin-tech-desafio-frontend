import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './actorItem.stories';

const { Default } = composeStories(stories);

describe('ActorItem', () => {
	it('renders a actor item', () => {
		render(<Default />);
		const avatarImg = screen.getByRole('img');
		const actorName = screen.getByText('Tom Holland');
		const actorAge = screen.getByTestId('actor-age');

		expect(avatarImg).toBeInTheDocument();
		expect(actorName).toBeInTheDocument();
		expect(actorAge).toBeValid();
	});

	it('render actor item unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
