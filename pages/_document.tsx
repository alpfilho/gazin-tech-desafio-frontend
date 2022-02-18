import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

const Document: React.FC<DocumentProps> = () => {
	return (
		<Html lang="pt-BR">
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#515151" />
				<meta name="apple-mobile-web-app-title" content="GazinFilms" />
				<meta name="application-name" content="GazinFilms" />
				<meta name="msapplication-TileColor" content="#515151" />
				<meta name="theme-color" content="#515151" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
