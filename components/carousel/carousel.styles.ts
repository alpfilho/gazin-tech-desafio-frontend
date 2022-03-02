import styled from 'styled-components';

export const CarouselContainer = styled.div`
	position: relative;
	height: 300px;
	width: 100%;
`;

export const NavigationContainer = styled.button`
	position: absolute;
	top: 0;
	bottom: 0;
	height: 100%;
	cursor: pointer;

	border: none;
	background-color: transparent;
`;

export const NavLeft = styled(NavigationContainer)`
	left: 0;
	transform: translateX(-50%);
`;

export const NavRight = styled(NavigationContainer)`
	right: 0;
	transform: translateX(50%);
`;

export const NavIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 5em;
	height: 5em;

	background-color: rgba(0, 0, 0, 0.66);
	border-radius: 50%;

	svg {
		height: 1.25em;
		width: auto;
	}
`;

export const ItemsContainer = styled.div`
	width: 100%;
	height: 100%;
	/* background-color: blue; */
`;
