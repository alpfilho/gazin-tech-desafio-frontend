import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Head from 'next/head';

import type { Theme } from 'lib/types';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import 'styles/app.css';

import { Header } from 'components/header';
import { Footer } from 'components/footer';

import { ViewportProvider } from 'hooks/useViewport';

import { AppThemeDark, AppThemeLight } from './_app.theme';
import { AppContainer, AppContent } from './_app.styles';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	const [appTheme, setAppTheme] = useState<Theme>('dark');

	useEffect(() => {
		const localTheme = localStorage.getItem('theme') as Theme;
		if (localTheme) {
			setAppTheme(localTheme);
		}
	}, []);

	useEffect(() => {
		if (appTheme) {
			localStorage.setItem('theme', appTheme);
		}
	}, [appTheme]);

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
		<>
			<Head>
				<title>GazinFilms</title>
			</Head>
			<ViewportProvider>
				<ThemeProvider theme={appTheme === 'light' ? AppThemeLight : AppThemeDark}>
					<AppContainer>
						<Header activeTheme={appTheme} themeSwitch={themeSwitch} />
						<AppContent>
							<Component {...pageProps} />
						</AppContent>
						<Footer />
					</AppContainer>
				</ThemeProvider>
			</ViewportProvider>
		</>
	);
};

export default App;
