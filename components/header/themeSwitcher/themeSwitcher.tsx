import React from 'react';
import { useTheme } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { Theme, ThemeSwitch } from 'lib/types';

import { ThemeName } from './themeName';

import {
	SwitcherContainer,
	SwitcherContent,
	SwitcherIconContainer,
	ThemeSwitcherContainer
} from './themeSwitcher.styles';

interface ThemeSwitcherI {
	activeTheme: Theme;
	themeSwitch: ThemeSwitch;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherI> = ({ activeTheme, themeSwitch }) => {
	const theme = useTheme();
	const isDarkTheme = activeTheme !== 'light';

	return (
		<SwitcherContainer>
			<ThemeName active={isDarkTheme}>Dark</ThemeName>
			<ThemeSwitcherContainer
				onClick={themeSwitch}
				title={`Alterar para tema ${isDarkTheme ? 'claro' : 'escuro'}`}
			>
				<SwitcherContent
					initial={false}
					animate={{ x: isDarkTheme ? '0%' : '100%' }}
					transition={{ type: 'spring', damping: 50, stiffness: 300 }}
				>
					<SwitcherIconContainer
						initial={false}
						animate={{
							x: isDarkTheme ? '-50%' : '100%',
							y: '-50%',
							opacity: isDarkTheme ? 1 : 0
						}}
						transition={{
							opacity: { type: 'tween', duration: 0.25 },
							default: { type: 'spring', damping: 50, stiffness: 200 }
						}}
					>
						<FontAwesomeIcon icon={faMoon} color={theme.colors.white} />
					</SwitcherIconContainer>
					<SwitcherIconContainer
						initial={false}
						animate={{
							x: isDarkTheme ? '-100%' : '-50%',
							y: '-50%',
							opacity: isDarkTheme ? 0 : 1
						}}
						transition={{
							opacity: { type: 'tween', duration: 0.25 },
							default: { type: 'spring', damping: 50, stiffness: 200 }
						}}
					>
						<FontAwesomeIcon icon={faSun} color={theme.colors.gray} />
					</SwitcherIconContainer>
				</SwitcherContent>
			</ThemeSwitcherContainer>
			<ThemeName active={!isDarkTheme}>Light</ThemeName>
		</SwitcherContainer>
	);
};
