import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import addons from '@storybook/addons';
import { themes } from '@storybook/theming';

import { AppThemeDark, AppThemeLight } from '../pages/_app.theme';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import 'styles/app.css';

export const parameters = {
	layout: 'centered',
	darkMode: {
		dark: { ...themes.dark },
		light: { ...themes.normal }
	},
	backgrounds: {
		disable: true
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	options: {
		storySort: {
			order: [
				'Movie',
				'Actor',
				'Home',
				'Components',
				[
					'Logo',
					'Header',
					'Title',
					'List Actors',
					'List Films',
					'List Results',
					'Details',
					'Tmdb Rating',
					'Tmdb Logo',
					'Carousel',
					'Slider Control',
					'Footer'
				],
				'Layout'
			]
		}
	}
};

const channel = addons.getChannel();

function ThemeWrapper({ children }) {
	const [isDark, setDark] = useState(false);

	useEffect(() => {
		channel.on('DARK_MODE', setDark);
		return () => channel.off('DARK_MODE', setDark);
	}, [channel, setDark]);

	return <ThemeProvider theme={isDark ? AppThemeDark : AppThemeLight}>{children}</ThemeProvider>;
}

export const decorators = [
	(Story) => (
		<ThemeWrapper>
			<Story />
		</ThemeWrapper>
	)
];
