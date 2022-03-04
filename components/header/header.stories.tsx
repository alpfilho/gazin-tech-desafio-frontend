import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header } from './header';

export default {
	title: 'Header',
	component: Header,
	argTypes: {
		themeSwitch: {
			type: 'function'
		}
	},
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof Header>;

const themeSwitch = () => {
	console.log('theme switch');
};

export const Default: ComponentStory<typeof Header> = (args) => <Header {...args} />;

Default.args = {
	activeTheme: 'dark',
	themeSwitch
};
