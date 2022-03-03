import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	justify-content: center;
	align-items: center;

	padding-left: 6em;
	padding-right: 6em;

	@media screen and (max-width: 992px) {
		padding-left: 2em;
		padding-right: 2em;
	}

	@media screen and (max-width: 768px) {
		padding-left: 1em;
		padding-right: 1em;
	}
`;

export const Content = styled.div`
	width: 100%;
	max-width: 1920px;
`;
