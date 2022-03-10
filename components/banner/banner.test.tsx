import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './banner.stories';

const { Default } = composeStories(stories);

describe('Banner', () => {
	it('render a banner', () => {
		render(<Default />);

		const movie1Title = screen.getByText('Batman');
		const movie2Title = screen.getByText('Homem-Aranha: Sem Volta Para Casa');
		const movie3Title = screen.getByText("King's Man: A Origem");

		expect(movie1Title).toBeInTheDocument();
		expect(movie1Title).toBeVisible();
		expect(movie2Title).toBeInTheDocument();
		expect(movie2Title).toBeInTheDocument();
		expect(movie3Title).toBeInTheDocument();
	});

	it('render Banner unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
