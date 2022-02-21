import React from 'react';

import { AppPageContainer } from './appPage.styles';

export const AppPage: React.FC<{ className?: string }> = ({ children, className }) => {
	return <AppPageContainer className={className}>{children}</AppPageContainer>;
};
