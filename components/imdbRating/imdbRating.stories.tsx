import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImdbRating } from './imdbRating';

export default {
	title: 'Imdb Rating',
	component: ImdbRating,
	argTypes: {
		canRate: {
			control: { type: 'boolean' },
			defaultValue: true
		},
		rating: {
			control: { type: 'select' },
			options: [10, 6.7, 4.5, 0, 8.5],
			defaultValue: 0
		}
	}
} as ComponentMeta<typeof ImdbRating>;

export const Default: ComponentStory<typeof ImdbRating> = ({ rating, canRate }) => (
	<ImdbRating canRate={canRate} rating={rating || 0} />
);
