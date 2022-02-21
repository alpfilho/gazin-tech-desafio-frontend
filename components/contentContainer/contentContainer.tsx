import React from 'react';

import { Container, Content } from './contentContainer.styles';

export const ContentContainer: React.FC<{ className?: string }> = ({ children, className }) => (
	<Container className={className}>
		<Content>{children}</Content>
	</Container>
);
