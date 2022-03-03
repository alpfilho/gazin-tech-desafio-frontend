import styled from 'styled-components';

export const RatingContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	user-select: none;
`;

export const SvgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		height: 100%;
		width: auto;
	}
`;

export const StarContainer = styled(SvgContainer)`
	height: 2em;
`;

export const RatingText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	white-space: nowrap;

	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	font-size: 2.75em;

	@media screen and (max-width: 768px) {
		font-size: 2em;
	}
`;

export const Rating = styled.div`
	width: 2em;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
`;

export const RatingLimit = styled.div`
	width: 2.125em;
	font-size: 80%;
	display: flex;
	justify-content: flex-start;
	text-align: left;
	align-items: center;
	color: #ffb800;
`;

export const TmbdLogoContainer = styled.div`
	width: 5em;
`;
