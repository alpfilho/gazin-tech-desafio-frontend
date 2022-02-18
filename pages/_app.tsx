import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import { Footer } from '@components/footer';
import { Header } from '@components/header';

import { AppTheme } from './_app.theme';
import { AppContainer, AppContent } from './_app.styles';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={AppTheme}>
			<AppContainer>
				<Header />
				<AppContent>
					<Component {...pageProps} />
				</AppContent>
				<Footer />
			</AppContainer>
		</ThemeProvider>
	);
};

export default App;
