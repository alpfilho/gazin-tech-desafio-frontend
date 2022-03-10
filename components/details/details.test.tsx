import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './details.stories';

const { ActorDetail, MovieDetail } = composeStories(stories);

describe('Details', () => {
	it('render a movie detail', () => {
		render(<MovieDetail />);

		const movieTitle = screen.getByText('Homem-Aranha: Sem Volta Para Casa');
		expect(movieTitle).toBeInTheDocument();
	});

	it('movie detail render unchanged', () => {
		const { container } = render(<MovieDetail />);

		expect(container).toMatchSnapshot();
	});

	it('render a actor detail', () => {
		render(<ActorDetail />);

		const actorName = screen.getByText('Tom Holland');
		expect(actorName).toBeInTheDocument();
	});

	it('actor detail render unchanged', () => {
		const { container } = render(<ActorDetail />);

		expect(container).toMatchSnapshot();
	});
});
