import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './logo.stories';

const { Default } = composeStories(stories);

describe('Logo', () => {
	it('render a logo', () => {
		render(<Default />);

		const logoSvg = screen.getByTestId('gazin-logo');
		expect(logoSvg).toBeInTheDocument();
	});

	it('logo render unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
