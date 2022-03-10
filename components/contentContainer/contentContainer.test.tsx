import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './contentContainer.stories';

const { Default } = composeStories(stories);

describe('ContentContainer', () => {
	it('render a content container with example content', () => {
		render(<Default />);

		const exampleText = screen.getByText('Example Content');

		expect(exampleText).toBeInTheDocument();
		expect(exampleText).toBeVisible();
	});

	it('render content container unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
