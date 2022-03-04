import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ActorItem } from './actorItem';

export default {
	title: 'Actor/Item',
	component: ActorItem
} as ComponentMeta<typeof ActorItem>;

export const Default: ComponentStory<typeof ActorItem> = (args) => <ActorItem {...args} />;

Default.args = {
	id: 1136406,
	name: 'Tom Holland',
	birthday: '1996-06-01',
	image: 'http://image.tmdb.org/t/p/h632/2qhIDp44cAqP2clOgt2afQI07X8.jpg'
};
