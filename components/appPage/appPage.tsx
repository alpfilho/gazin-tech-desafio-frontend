import React from 'react';

import { AppPageContainer } from './appPage.styles';

export const AppPage: React.FC = ({ children }) => {
	return <AppPageContainer>{children}</AppPageContainer>;
};
