import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		text: string;
		text2: string;
		background: string;
		background2: string;
		background3: string;
		colors: {
			white: string;
			yellow: string;
			black: string;
			gray: string;
		};
	}
}
