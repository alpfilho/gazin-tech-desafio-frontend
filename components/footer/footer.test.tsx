import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './footer.stories';

const { Default } = composeStories(stories);

describe('Footer', () => {
	it('render a footer', () => {
		render(<Default />);

		const devName = screen.getByText('Alfredo Peres');
		expect(devName).toBeInTheDocument();
	});

	it('footer render unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
