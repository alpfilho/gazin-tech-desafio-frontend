import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TmdbLogo } from './tmdbLogo';

import { TmdbLogoStoryDecorator } from './tmdbLogo.styles';

export default {
	title: 'Components/Tmdb Logo',
	component: TmdbLogo,
	decorators: [
		(Story) => (
			<TmdbLogoStoryDecorator>
				<Story />
			</TmdbLogoStoryDecorator>
		)
	]
} as ComponentMeta<typeof TmdbLogo>;

export const PrimaryShort: ComponentStory<typeof TmdbLogo> = (args) => <TmdbLogo {...args} />;

PrimaryShort.args = {
	type: 'primary-short'
};

export const AltShort: ComponentStory<typeof TmdbLogo> = (args) => <TmdbLogo {...args} />;

AltShort.args = {
	type: 'alt-short'
};
