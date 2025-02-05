import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TmdbRating } from './tmdbRating';

export default {
	title: 'Components/Tmdb Rating',
	component: TmdbRating,
	argTypes: {
		rating: {
			control: { type: 'select' },
			options: [10, 6.7, 4.5, 0, 8.5],
			defaultValue: 0
		}
	}
} as ComponentMeta<typeof TmdbRating>;

export const Default: ComponentStory<typeof TmdbRating> = (args) => <TmdbRating {...args} />;

Default.args = {
	rating: 0
};
