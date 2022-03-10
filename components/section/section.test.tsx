import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './section.stories';

const { Default } = composeStories(stories);

describe('Section', () => {
	it('render a section', () => {
		render(<Default />);

		const exampleContent = screen.getByText('Example Content');
		expect(exampleContent).toBeInTheDocument();
	});

	it('section render unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
