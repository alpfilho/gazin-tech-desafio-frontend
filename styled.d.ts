import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			white: string;
			primaryBlack: string;
			primaryGray: string;
		};
	}
}
