import React from 'react';
import Link from 'next/link';
import { useTheme } from 'styled-components';

import { Theme, ThemeSwitch } from 'lib/types';

import { Logo } from 'components/logo';
import { ContentContainer } from 'components/contentContainer';

import { SearchInput } from './searchInput';
import { HeaderContainer, HeaderContent, LogoContainer, RightContainer } from './header.styles';
import { ThemeSwitcher } from './themeSwitcher';

interface HeaderI {
	activeTheme: Theme;
	themeSwitch: ThemeSwitch;
}

export const Header: React.FC<HeaderI> = ({ activeTheme, themeSwitch }) => {
	const theme = useTheme();

	return (
		<HeaderContainer>
			<HeaderContent>
				<ContentContainer>
					<Link href="/home" passHref>
						<LogoContainer>
							<Logo color={theme.text} />
						</LogoContainer>
					</Link>
					<RightContainer>
						<SearchInput />
						<ThemeSwitcher activeTheme={activeTheme} themeSwitch={themeSwitch} />
					</RightContainer>
				</ContentContainer>
			</HeaderContent>
		</HeaderContainer>
	);
};
