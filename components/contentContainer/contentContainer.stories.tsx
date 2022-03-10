import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContentContainer } from './contentContainer';

export default {
	title: 'Layout/Content Container',
	component: ContentContainer,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof ContentContainer>;

export const Default: ComponentStory<typeof ContentContainer> = () => (
	<ContentContainer>
		<h1>Example Content</h1>
	</ContentContainer>
);
