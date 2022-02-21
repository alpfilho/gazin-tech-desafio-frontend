import Link from 'next/link';
import { useTheme } from 'styled-components';

import { Logo } from '@components/logo';
import { ContentContainer } from '@components/contentContainer';

import { SearchInput } from '../searchInput';
import { HeaderContainer, HeaderContent, LogoContainer, SearchContainer } from './desktop.styles';

export const DesktopHeader: React.FC = () => {
	const { colors } = useTheme();

	return (
		<HeaderContainer>
			<HeaderContent>
				<ContentContainer>
					<Link href="/home" passHref>
						<LogoContainer>
							<Logo color={colors.white} />
						</LogoContainer>
					</Link>
					<SearchContainer>
						<SearchInput />
					</SearchContainer>
				</ContentContainer>
			</HeaderContent>
		</HeaderContainer>
	);
};
