import styled from 'styled-components';

export const TmdbLogoContainer = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 100%;
		height: auto;
	}
`;

/* storybook */

export const TmdbLogoStoryDecorator = styled.div`
	min-width: 300px;
`;
