import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ActorAvatar } from './actorAvatar';

export default {
	title: 'Actor/Avatar',
	component: ActorAvatar
} as ComponentMeta<typeof ActorAvatar>;

export const Default: ComponentStory<typeof ActorAvatar> = (args) => <ActorAvatar {...args} />;

Default.args = {
	url: 'http://image.tmdb.org/t/p/h632/2qhIDp44cAqP2clOgt2afQI07X8.jpg'
};
