import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './title.stories';

const { Default } = composeStories(stories);

describe('Title', () => {
	it('render a title', () => {
		render(<Default />);

		const exampleContent = screen.getByText('Example Title');
		expect(exampleContent).toBeInTheDocument();
	});

	it('title render unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
