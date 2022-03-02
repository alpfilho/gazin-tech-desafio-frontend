import styled from 'styled-components';

export const ControlContainer = styled.button`
	z-index: 3;
	position: absolute;
	top: 0;
	bottom: 0;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: none;
	padding: 0;
	&:focus {
		outline: none;
		border: none;
	}
`;

export const LeftControlButton = styled(ControlContainer)`
	left: 0;
	right: auto;
	padding-left: 3em;
`;

export const RightControlButton = styled(ControlContainer)`
	right: 0;
	left: auto;
	padding-right: 3em;
`;

export const ControlIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 5em;
	height: 5em;

	background-color: rgba(0, 0, 0, 0.66);
	border-radius: 50%;

	svg {
		height: 2em;
		width: auto;
	}
`;
