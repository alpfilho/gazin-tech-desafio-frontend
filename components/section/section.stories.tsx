import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Section } from './section';

export default {
	title: 'Layout/Section',
	component: Section,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof Section>;

export const Default: ComponentStory<typeof Section> = () => (
	<Section>
		<h1>Example Content</h1>
	</Section>
);
