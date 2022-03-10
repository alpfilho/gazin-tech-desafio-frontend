import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Footer } from './footer';

export default {
	title: 'Components/Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

Default.args = {};
