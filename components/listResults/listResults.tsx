import React from 'react';

import type { MovieItemData } from 'lib/types';

import { ListResultsContainer, ResultContainer, ResultText } from './listResults.styles';
import { MovieItem } from 'components/movieItem';
import { ContentContainer } from 'components/contentContainer';

export const ListResults: React.FC<{ results: MovieItemData[]; search?: string }> = ({
	results,
	search
}) => {
	if (search) {
		if (!results) {
			return (
				<ListResultsContainer>
					<ContentContainer>
						<ResultText>Carregando</ResultText>
					</ContentContainer>
				</ListResultsContainer>
			);
		}

		if (results.length === 0) {
			return (
				<ListResultsContainer>
					<ContentContainer>
						<ResultText>{`Nenhum resultado para "${search}"`}</ResultText>
					</ContentContainer>
				</ListResultsContainer>
			);
		}

		return (
			<ListResultsContainer>
				<ContentContainer>
					{results.map(({ id, title, poster, releaseDate }) => (
						<ResultContainer key={id}>
							<MovieItem id={id} title={title} image={poster} releaseDate={releaseDate} />
						</ResultContainer>
					))}
				</ContentContainer>
			</ListResultsContainer>
		);
	}

	return null;
};
