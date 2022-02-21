import React from 'react';

import { ContentContainer } from '@components/contentContainer';
import { SectionContainer } from './section.styles';

export const Section: React.FC = ({ children }) => {
	return (
		<SectionContainer>
			<ContentContainer>{children}</ContentContainer>
		</SectionContainer>
	);
};
