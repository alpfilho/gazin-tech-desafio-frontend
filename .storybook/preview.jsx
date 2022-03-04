import { ThemeProvider } from 'styled-components';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

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
	}
};

function ThemeWrapper({ children }) {
	return (
		<ThemeProvider theme={useDarkMode() ? AppThemeDark : AppThemeLight}>{children}</ThemeProvider>
	);
}

export const decorators = [
	(Story) => (
		<ThemeWrapper>
			<Story />
		</ThemeWrapper>
	)
];
