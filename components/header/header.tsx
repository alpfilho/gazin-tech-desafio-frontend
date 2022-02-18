import React from 'react';
import { useTheme } from 'styled-components';

import { Logo } from '@components/logo';

import { HeaderContainer, LogoContainer } from './header.styles';
import Link from 'next/link';

export const Header: React.FC = () => {
	const theme = useTheme();

	return (
		<HeaderContainer>
			<Link href="/" passHref>
				<LogoContainer>
					<Logo color={theme.colors.white} />
				</LogoContainer>
			</Link>
		</HeaderContainer>
	);
};
