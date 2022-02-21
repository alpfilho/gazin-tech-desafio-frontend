import React, { useCallback, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

import {
	IconContainer,
	InputContainer,
	InputElement,
	SearchButton,
	SearchForm
} from './searchInput.styles';

export const SearchInput: React.FC = () => {
	const inputElement = useRef<HTMLInputElement>(null);
	const { query: urlQuery, pathname, push } = useRouter();
	const { colors } = useTheme();

	/** Ao enviar form */
	const onSubmitSearch = useCallback(
		(event) => {
			event.preventDefault();
			const search = event.target.search.value;
			push({ pathname: '/search', query: { query: encodeURIComponent(search) } });

			if (inputElement.current) {
				inputElement.current.blur();
			}
		},
		[push]
	);

	/** Sincroniza a url com o input */
	useEffect(() => {
		if (inputElement.current) {
			if (pathname === '/search') {
				const { query } = urlQuery;

				if (typeof query === 'string') {
					const decodedSearch = decodeURIComponent(query);
					inputElement.current.value = decodedSearch;
				}
			} else if (inputElement.current.value.length > 0) {
				inputElement.current.value = '';
			}
		}
	}, [pathname, urlQuery]);

	/** Foco no input ao clicar no form */
	const onClickForm = useCallback(() => {
		if (inputElement.current) {
			inputElement.current.focus();
		}
	}, []);

	return (
		<SearchForm
			onSubmit={onSubmitSearch}
			onClick={onClickForm}
			autoComplete="off"
			noValidate
			spellCheck="false"
		>
			<InputContainer>
				<InputElement ref={inputElement} type="text" name="search" placeholder="Busque filmes" />
			</InputContainer>
			<SearchButton type="submit">
				<IconContainer>
					<FontAwesomeIcon icon={faMagnifyingGlass} color={colors.white} />
				</IconContainer>
			</SearchButton>
		</SearchForm>
	);
};
