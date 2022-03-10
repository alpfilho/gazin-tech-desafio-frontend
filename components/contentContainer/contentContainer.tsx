import React from 'react';

import { Container, Content } from './contentContainer.styles';

/**
 * Componente que mantém o conteúdo centralizado na tela,
 * limitando a expansão e aplicando margem
 */
export const ContentContainer: React.FC<{ className?: string }> = ({ children, className }) => (
	<Container className={className}>
		<Content>{children}</Content>
	</Container>
);
