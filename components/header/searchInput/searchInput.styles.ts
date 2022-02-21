import styled from 'styled-components';

export const SearchForm = styled.form`
	width: 100%;
	height: 3.625em;
	background-color: ${(props) => props.theme.colors.primaryGray};

	border-radius: 0.75em;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const InputContainer = styled.div`
	flex-grow: 1;
	padding: 1em;
	padding-left: 1.25em;
`;

export const InputElement = styled.input`
	width: 100%;
	height: 100%;
	padding: 0;
	font-size: 1.125em;

	border: none;
	outline: none;

	font-family: 'Poppins', sans-serif;
	font-weight: 700;

	color: #fff;
`;

export const SearchButton = styled.button`
	flex-shrink: 0;

	height: 58px;
	width: 58px;

	padding: 0;
	border: none;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const IconContainer = styled.div`
	height: 1.5em;
	width: 1.5em;

	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		width: 100%;
		height: auto;
	}
`;
