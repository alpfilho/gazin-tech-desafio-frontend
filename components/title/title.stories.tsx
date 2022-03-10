import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Title } from './title.styles';

export default {
	title: 'Components/Title',
	component: Title
} as ComponentMeta<typeof Title>;

export const Default: ComponentStory<typeof Title> = () => <Title>Example Title</Title>;
