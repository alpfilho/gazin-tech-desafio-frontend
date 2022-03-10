import styled from 'styled-components';

export const MoviePosterContainer = styled.div`
	width: 100%;
	overflow: hidden;
	border-radius: 1em;
	box-shadow: 0 0.5em 2em rgba(0, 0, 0, 0.33);

	@media screen and (max-width: 992px) {
		border-radius: 0.5em;
	}
`;

export const PosterContent = styled.div`
	position: relative;
	padding-bottom: calc(100% * 1.48);
`;

export const MovieImage = styled.div`
	position: absolute;
	top: -2px;
	bottom: -2px;
	left: -2px;
	right: -2px;
	background-size: cover;
	background-image: url('/images/no_poster_or_avatar_image.png');
	background-position: center center;
`;

export const MovieImageContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

/* storybook */

export const MoviePosterStoryDecorator = styled.div`
	min-width: 20em;

	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;
