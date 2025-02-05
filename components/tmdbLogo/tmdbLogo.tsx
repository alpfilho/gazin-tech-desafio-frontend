import React from 'react';

export const TmdbLogo: React.FC<{ type: 'primary-short' | 'alt-short' }> = ({ type }) => {
	if (type === 'primary-short') {
		return (
			<svg
				data-testid="tmdb-logo-primary-short"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 190.24 81.52"
			>
				<defs>
					<linearGradient
						id="imdb-logo-gradient-1"
						x2="190.24"
						y1="40.76"
						y2="40.76"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor="#90cea1" />
						<stop offset=".56" stopColor="#3cbec9" />
						<stop offset="1" stopColor="#00b3e5" />
					</linearGradient>
				</defs>
				<g data-name="Layer 2">
					<path
						fill="url(#imdb-logo-gradient-1)"
						d="M105.67 36.06h66.9a17.67 17.67 0 0 0 17.67-17.66A17.67 17.67 0 0 0 172.57.73h-66.9A17.67 17.67 0 0 0 88 18.4a17.67 17.67 0 0 0 17.67 17.66Zm-88 45h76.9a17.67 17.67 0 0 0 17.67-17.66 17.67 17.67 0 0 0-17.67-17.67h-76.9A17.67 17.67 0 0 0 0 63.4a17.67 17.67 0 0 0 17.67 17.66Zm-7.26-45.64h7.8V6.92h10.1V0h-28v6.9h10.1Zm28.1 0h7.8V8.25h.1l9 27.15h6l9.3-27.15h.1V35.4h7.8V0H66.76l-8.2 23.1h-.1L50.31 0h-11.8Zm113.92 20.25a15.07 15.07 0 0 0-4.52-5.52 18.57 18.57 0 0 0-6.68-3.08 33.54 33.54 0 0 0-8.07-1h-11.7v35.4h12.75a24.58 24.58 0 0 0 7.55-1.15 19.34 19.34 0 0 0 6.35-3.32 16.27 16.27 0 0 0 4.37-5.5 16.91 16.91 0 0 0 1.63-7.58 18.5 18.5 0 0 0-1.68-8.25ZM145 68.6a8.8 8.8 0 0 1-2.64 3.4 10.7 10.7 0 0 1-4 1.82 21.57 21.57 0 0 1-5 .55h-4.05v-21h4.6a17 17 0 0 1 4.67.63 11.66 11.66 0 0 1 3.88 1.87A9.14 9.14 0 0 1 145 59a9.87 9.87 0 0 1 1 4.52 11.89 11.89 0 0 1-1 5.08Zm44.63-.13a8 8 0 0 0-1.58-2.62 8.38 8.38 0 0 0-2.42-1.85 10.31 10.31 0 0 0-3.17-1v-.1a9.22 9.22 0 0 0 4.42-2.82 7.43 7.43 0 0 0 1.68-5 8.42 8.42 0 0 0-1.15-4.65 8.09 8.09 0 0 0-3-2.72 12.56 12.56 0 0 0-4.18-1.3 32.84 32.84 0 0 0-4.62-.33h-13.2v35.4h14.5a22.41 22.41 0 0 0 4.72-.5 13.53 13.53 0 0 0 4.28-1.65 9.42 9.42 0 0 0 3.1-3 8.52 8.52 0 0 0 1.2-4.68 9.39 9.39 0 0 0-.55-3.18Zm-19.42-15.75h5.3a10 10 0 0 1 1.85.18 6.18 6.18 0 0 1 1.7.57 3.39 3.39 0 0 1 1.22 1.13 3.22 3.22 0 0 1 .48 1.82 3.63 3.63 0 0 1-.43 1.8 3.4 3.4 0 0 1-1.12 1.2 4.92 4.92 0 0 1-1.58.65 7.51 7.51 0 0 1-1.77.2h-5.65Zm11.72 20a3.9 3.9 0 0 1-1.22 1.3 4.64 4.64 0 0 1-1.68.7 8.18 8.18 0 0 1-1.82.2h-7v-8h5.9a15.35 15.35 0 0 1 2 .15 8.47 8.47 0 0 1 2.05.55 4 4 0 0 1 1.57 1.18 3.11 3.11 0 0 1 .63 2 3.71 3.71 0 0 1-.43 1.92Z"
						data-name="Layer 1"
					/>
				</g>
			</svg>
		);
	} else {
		return (
			<svg
				data-testid="tmdb-logo-alt-short"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 273.42 35.52"
			>
				<defs>
					<linearGradient
						id="imdb-logo-gradient-2"
						x2="273.42"
						y1="17.76"
						y2="17.76"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor="#90cea1" />
						<stop offset=".56" stopColor="#3cbec9" />
						<stop offset="1" stopColor="#00b3e5" />
					</linearGradient>
				</defs>
				<g data-name="Layer 2">
					<path
						fill="url(#imdb-logo-gradient-2)"
						d="M191.85 35.37h63.9a17.67 17.67 0 0 0 17.67-17.67A17.67 17.67 0 0 0 255.75 0h-63.9a17.67 17.67 0 0 0-17.67 17.7 17.67 17.67 0 0 0 17.67 17.67Zm-181.75.05h7.8V6.92H28V0H0v6.9h10.1Zm28.1 0H46V8.25h.1l8.95 27.15h6L70.3 8.25h.1V35.4h7.8V0H66.45l-8.2 23.1h-.1L50 0H38.2ZM89.14.12h11.7a33.56 33.56 0 0 1 8.08 1 18.52 18.52 0 0 1 6.67 3.08 15.09 15.09 0 0 1 4.53 5.52 18.5 18.5 0 0 1 1.67 8.25 16.91 16.91 0 0 1-1.62 7.58 16.3 16.3 0 0 1-4.38 5.5 19.24 19.24 0 0 1-6.35 3.37 24.53 24.53 0 0 1-7.55 1.15H89.14Zm7.8 28.2h4a21.66 21.66 0 0 0 5-.55A10.58 10.58 0 0 0 110 26a8.73 8.73 0 0 0 2.68-3.35 11.9 11.9 0 0 0 1-5.08 9.87 9.87 0 0 0-1-4.52 9.17 9.17 0 0 0-2.63-3.18A11.61 11.61 0 0 0 106.22 8a17.06 17.06 0 0 0-4.68-.63h-4.6ZM133.09.12h13.2a32.87 32.87 0 0 1 4.63.33 12.66 12.66 0 0 1 4.17 1.3 7.94 7.94 0 0 1 3 2.72 8.34 8.34 0 0 1 1.15 4.65 7.48 7.48 0 0 1-1.67 5 9.13 9.13 0 0 1-4.43 2.82V17a10.28 10.28 0 0 1 3.18 1 8.51 8.51 0 0 1 2.45 1.85 7.79 7.79 0 0 1 1.57 2.62 9.16 9.16 0 0 1 .55 3.2 8.52 8.52 0 0 1-1.2 4.68 9.32 9.32 0 0 1-3.1 3 13.38 13.38 0 0 1-4.27 1.65 22.5 22.5 0 0 1-4.73.5h-14.5Zm7.8 14.15h5.65a7.65 7.65 0 0 0 1.78-.2 4.78 4.78 0 0 0 1.57-.65 3.43 3.43 0 0 0 1.13-1.2 3.63 3.63 0 0 0 .42-1.8A3.3 3.3 0 0 0 151 8.6a3.42 3.42 0 0 0-1.23-1.13A6.07 6.07 0 0 0 148 6.9a9.9 9.9 0 0 0-1.85-.18h-5.3Zm0 14.65h7a8.27 8.27 0 0 0 1.83-.2 4.67 4.67 0 0 0 1.67-.7 3.93 3.93 0 0 0 1.23-1.3 3.8 3.8 0 0 0 .47-1.95 3.16 3.16 0 0 0-.62-2 4 4 0 0 0-1.58-1.18 8.23 8.23 0 0 0-2-.55 15.12 15.12 0 0 0-2.05-.15h-5.9Z"
						data-name="Layer 1"
					/>
				</g>
			</svg>
		);
	}

	return null;
};
