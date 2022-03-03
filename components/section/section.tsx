import React from 'react';

import { SectionContainer } from './section.styles';

export const Section: React.FC = ({ children }) => {
	return <SectionContainer>{children}</SectionContainer>;
};
