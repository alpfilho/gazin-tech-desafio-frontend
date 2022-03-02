import React from 'react';
import { ThemeNameContainer } from './themeName.styles';

interface ThemeNameI {
	active: boolean;
}

export const ThemeName: React.FC<ThemeNameI> = ({ children, active }) => {
	return (
		<ThemeNameContainer
			initial={false}
			animate={{ opacity: active ? 1 : 0.2 }}
			transition={{ type: 'tween', ease: 'linear' }}
		>
			{children}
		</ThemeNameContainer>
	);
};
