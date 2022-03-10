import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './appPage.stories';

const { Default } = composeStories(stories);

describe('AppPage', () => {
	it('render a app page with an example title', () => {
		render(<Default />);

		const exampleText = screen.getByText('Example Content');

		expect(exampleText).toBeInTheDocument();
		expect(exampleText).toBeVisible();
	});

	it('render AppPage unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
