import React, { useEffect, useState } from 'react';

import { Title } from '@components/title';

import { BannerContainer, TitleContainer, TitleContent } from './banner.styles';

export const Banner: React.FC = () => {
	const [movies, setMovies] = useState<{ title: string; color: string }[]>([]);

	useEffect(() => {
		setMovies([
			{ title: 'Filme 1', color: 'red' },
			{ title: 'Filme 2', color: 'blue' }
		]);
	}, []);

	return (
		<BannerContainer>
			<TitleContainer>
				{movies.map(({ title }) => (
					<TitleContent key={title}>
						<Title>{title}</Title>
					</TitleContent>
				))}
			</TitleContainer>
		</BannerContainer>
	);
};
