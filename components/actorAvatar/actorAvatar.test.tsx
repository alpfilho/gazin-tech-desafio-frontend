import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './actorAvatar.stories';

const { Default } = composeStories(stories);

describe('ActorAvatar', () => {
	it('renders a avatar', () => {
		render(<Default />);
		const avatarImg = screen.getByRole('img');
		expect(avatarImg).toBeInTheDocument();
	});

	it('render avatar unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
