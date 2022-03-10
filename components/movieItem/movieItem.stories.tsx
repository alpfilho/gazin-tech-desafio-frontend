import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MovieItem } from './movieItem';

export default {
	title: 'Movie/Item',
	component: MovieItem
} as ComponentMeta<typeof MovieItem>;

export const Default: ComponentStory<typeof MovieItem> = (args) => <MovieItem {...args} />;

Default.args = {
	id: 230896,
	image: 'http://image.tmdb.org/t/p/w500/j2mv9DczY12TZtA8L8PcMqaiSkI.jpg',
	title: 'Homem de Ferro e Hulk - Super-Heróis Unidos',
	releaseDate: '2013-12-03'
};
