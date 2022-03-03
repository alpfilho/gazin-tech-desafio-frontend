import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';

import { ContentContainer } from 'components/contentContainer';
import { TmdbLogo } from 'components/tmdbLogo';
import { Logo } from 'components/logo';

import {
	FooterContainer,
	LogoBox,
	LogosContainer,
	SignatureContainer,
	TmdbLogoBox
} from './footer.styles';

export const Footer: React.FC = () => {
	const theme = useTheme();

	return (
		<FooterContainer className="no-select">
			<ContentContainer>
				<LogosContainer>
					<Link href="/" passHref>
						<LogoBox>
							<Logo color={theme.text} />
						</LogoBox>
					</Link>
					<TmdbLogoBox href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
						<span>Dados fornecidos por:</span>
						<TmdbLogo type="alt-short" />
					</TmdbLogoBox>
				</LogosContainer>
			</ContentContainer>
			<SignatureContainer>
				<ContentContainer>
					Desenvolvido com <FontAwesomeIcon icon={faHeart} color="#ff2323" /> por{' '}
					<a href="https://github.com/alpfilho" target="_blank" rel="noreferrer">
						Alfredo Peres
					</a>
				</ContentContainer>
			</SignatureContainer>
		</FooterContainer>
	);
};
