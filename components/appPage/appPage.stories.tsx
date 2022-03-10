import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppPage } from './appPage';

export default {
	title: 'Layout/App Page',
	component: AppPage,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof AppPage>;

export const Default: ComponentStory<typeof AppPage> = () => (
	<AppPage>
		<h1>Example Content</h1>
	</AppPage>
);
