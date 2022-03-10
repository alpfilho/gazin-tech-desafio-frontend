import React from 'react';

import { AppPageContainer } from './appPage.styles';

interface AppPageI {
	className?: string;
}

/**
 * Componente estrutural para padronizar a criação de páginas
 */
export const AppPage: React.FC<AppPageI> = ({ children, className }) => {
	return <AppPageContainer className={className}>{children}</AppPageContainer>;
};
