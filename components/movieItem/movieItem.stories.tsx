import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MovieItem } from './movieItem';

export default {
	title: 'Movie/Item',
	component: MovieItem,
	argTypes: {
		title: {
			control: { type: 'text' },
			defaultValue: 'Uncharted'
		},
		image: {
			control: { type: 'text' },
			defaultValue:
				'https://m.media-amazon.com/images/M/MV5BOTNkN2ZmMzItOTAwMy00MmM5LTg5YTgtNmE5MThkMDE2ODJiXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg'
		},
		releaseDate: {
			control: { type: 'text' },
			defaultValue: '2022-02-18'
		}
	}
} as ComponentMeta<typeof MovieItem>;

export const Default: ComponentStory<typeof MovieItem> = ({ title, image, releaseDate }) => (
	<MovieItem id={1} title={title} image={image} releaseDate={releaseDate} />
);
