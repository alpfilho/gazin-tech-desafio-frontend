import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './listResults.stories';

const { Default, Loading, NotFound } = composeStories(stories);

describe('ListResults', () => {
	it('render a search result', () => {
		render(<Default />);

		const moviesImgArray = screen.getAllByRole('img');
		expect(moviesImgArray.length).toBe(17);
	});

	it('search result render unchanged', () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});

	it('render a search loading', () => {
		render(<Loading />);

		const loadingText = screen.getByText('Carregando');
		expect(loadingText).toBeInTheDocument();
	});

	it('search loding render unchanged', () => {
		const { container } = render(<Loading />);

		expect(container).toMatchSnapshot();
	});

	it('render a search empty result', () => {
		render(<NotFound />);

		const notFoundText = screen.getByText('Nenhum resultado para "Homem de Gelatina"');
		expect(notFoundText).toBeInTheDocument();
	});

	it('search empty result render unchanged', () => {
		const { container } = render(<NotFound />);

		expect(container).toMatchSnapshot();
	});
});
