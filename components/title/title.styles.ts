import styled from 'styled-components';

export const Title = styled.h1`
	padding: 0;
	margin: 0;

	font-family: 'Poppins', sans-serif;
	font-weight: 700;

	user-select: none;

	font-size: 2.5em;
	padding-bottom: 0.25em;

	color: ${({ theme }) => theme.text};

	@media screen and (max-width: 768px) {
		font-size: 2em;
	}
`;
