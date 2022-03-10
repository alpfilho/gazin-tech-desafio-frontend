import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MoviePoster } from './moviePoster';

import { MoviePosterStoryDecorator } from './moviePoster.styles';

export default {
	title: 'Movie/Poster',
	component: MoviePoster,
	decorators: [
		(Story) => (
			<MoviePosterStoryDecorator>
				<Story />
			</MoviePosterStoryDecorator>
		)
	],
	parameters: {
		docs: { source: { code: '<MoviePoster url="../uncharted-poster.png" />', language: 'jsx' } }
	}
} as ComponentMeta<typeof MoviePoster>;

export const Default: ComponentStory<typeof MoviePoster> = (args) => <MoviePoster {...args} />;

Default.args = {
	url: 'https://m.media-amazon.com/images/M/MV5BOTNkN2ZmMzItOTAwMy00MmM5LTg5YTgtNmE5MThkMDE2ODJiXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg'
};
