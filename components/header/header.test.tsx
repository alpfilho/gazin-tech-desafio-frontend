import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));

import * as stories from './header.stories';

const { Default } = composeStories(stories);

describe('Header', () => {
	it('render a header', () => {
		render(<Default />);
		const header = screen.getByTestId('header');
		expect(header).toBeInTheDocument();
	});

	it('header render unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
