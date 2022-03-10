import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SliderControl } from './sliderControl';

export default {
	title: 'Components/Slider Control',
	component: SliderControl
} as ComponentMeta<typeof SliderControl>;

export const Left: ComponentStory<typeof SliderControl> = (args) => <SliderControl {...args} />;

Left.args = {
	show: true,
	type: 'left'
};

export const Right: ComponentStory<typeof SliderControl> = (args) => <SliderControl {...args} />;

Right.args = {
	show: true,
	type: 'right'
};
