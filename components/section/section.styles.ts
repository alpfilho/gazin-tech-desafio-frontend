import styled from 'styled-components';

import { Container, Content } from 'components/contentContainer';

export const SectionContainer = styled.section`
	padding-top: 2em;

	${Container} {
		${Content} {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-direction: column;
		}
	}
`;
