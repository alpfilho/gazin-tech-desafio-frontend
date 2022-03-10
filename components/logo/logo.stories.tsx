import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Logo } from './logo';

export default {
	title: 'Components/Logo',
	component: Logo,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof Logo>;

export const Default: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

Default.args = {
	color: '#4867c4'
};
