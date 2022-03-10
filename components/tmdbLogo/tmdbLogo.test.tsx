import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './tmdbLogo.stories';

const { AltShort, PrimaryShort } = composeStories(stories);

describe('Tmdb Logo', () => {
	it('render a Tmdb Alt Short Logo', () => {
		render(<AltShort />);

		const logo = screen.getByTestId('tmdb-logo-alt-short');
		expect(logo).toBeInTheDocument();
	});

	it('Tmdb alt short logo render unchanged', () => {
		const { container } = render(<AltShort />);

		expect(container).toMatchSnapshot();
	});

	it('render a Tmdb Primary Short Logo', () => {
		render(<PrimaryShort />);

		const logo = screen.getByTestId('tmdb-logo-primary-short');
		expect(logo).toBeInTheDocument();
	});

	it('Tmdb primary short logo render unchanged', () => {
		const { container } = render(<PrimaryShort />);

		expect(container).toMatchSnapshot();
	});
});
