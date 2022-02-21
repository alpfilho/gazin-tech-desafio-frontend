import React from 'react';

import { Title } from '@components/title';

export const ListFilms: React.FC<{ list: { title: string }[] }> = () => {
	return <Title>Filmes Populares</Title>;
};
