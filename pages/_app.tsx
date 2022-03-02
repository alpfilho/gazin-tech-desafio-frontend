import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';

import type { Theme } from 'lib/types';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import { Header } from 'components/header';
import { Footer } from 'components/footer';

import { ViewportProvider } from 'hooks/useViewport';
import { ElementsSizeProvider } from 'hooks/useElementSize';

import { AppThemeDark, AppThemeLight } from './_app.theme';
import { AppContainer, AppContent } from './_app.styles';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	const [appTheme, setAppTheme] = useState<Theme>('dark');

	const themeSwitch = useCallback(() => {
		setAppTheme((prevTheme) => {
			if (prevTheme === 'dark') {
				return 'light';
			} else {
				return 'dark';
			}
		});
	}, []);

	return (
		<ViewportProvider>
			<ElementsSizeProvider>
				<ThemeProvider theme={appTheme === 'light' ? AppThemeLight : AppThemeDark}>
					<AppContainer>
						<Header activeTheme={appTheme} themeSwitch={themeSwitch} />
						<AppContent>
							<Component {...pageProps} />
						</AppContent>
						<Footer />
					</AppContainer>
				</ThemeProvider>
			</ElementsSizeProvider>
		</ViewportProvider>
	);
};

export default App;
