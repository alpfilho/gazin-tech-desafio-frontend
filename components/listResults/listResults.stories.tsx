import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListResults } from './listResults';

export default {
	title: 'Components/List Results',
	component: ListResults,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof ListResults>;

export const Default: ComponentStory<typeof ListResults> = (args) => <ListResults {...args} />;

Default.args = {
	search: 'Homem de Ferro',
	results: [
		{
			id: 230896,
			poster: 'http://image.tmdb.org/t/p/w500/j2mv9DczY12TZtA8L8PcMqaiSkI.jpg',
			title: 'Homem de Ferro e Hulk - Super-Heróis Unidos',
			releaseDate: '2013-12-03'
		},
		{
			id: 284274,
			poster: 'http://image.tmdb.org/t/p/w500/6E5OJfpoUM7k8C1bORXI1lXwhKD.jpg',
			title: 'Homem de Ferro e o Capitão América Super-Heróis Unidos',
			releaseDate: '2014-07-29'
		},
		{
			id: 10138,
			poster: 'http://image.tmdb.org/t/p/w500/vzROjQbgKWMVf2EldXipCcjpuBL.jpg',
			title: 'Homem de Ferro 2',
			releaseDate: '2010-04-28'
		},
		{
			id: 1726,
			poster: 'http://image.tmdb.org/t/p/w500/adSJ0DpgOsMwrpUH78cZpLGOOAk.jpg',
			title: 'Homem de Ferro',
			releaseDate: '2008-04-30'
		},
		{
			id: 635802,
			poster: 'http://image.tmdb.org/t/p/w500/wAmSMgyxCwjSxhqExSYmstMQPH.jpg',
			title: 'Elon Musk: O Verdadeiro Homem de Ferro',
			releaseDate: '2018-12-04'
		},
		{
			id: 169934,
			poster: 'http://image.tmdb.org/t/p/w500/nj2qT5Tcch56sCUsEYw1Q8G7ilt.jpg',
			title: 'Homem de Ferro: A Batalha Contra Ezekiel Stane',
			releaseDate: '2013-04-24'
		},
		{
			id: 68721,
			poster: 'http://image.tmdb.org/t/p/w500/C7MZwRTjvEy7gkWcLJeBGZFE1w.jpg',
			title: 'Homem de Ferro 3',
			releaseDate: '2013-04-18'
		},
		{
			id: 31675,
			poster: 'http://image.tmdb.org/t/p/w500/1qlnKlQGEdRl70KDpAv03F8uGzI.jpg',
			title: 'Cromwell, O Homem de Ferro',
			releaseDate: '1970-09-16'
		},
		{
			id: 13647,
			poster: 'http://image.tmdb.org/t/p/w500/eebNTSRa5Hh5skPKGdGJIJpo9Ls.jpg',
			title: 'O Invencível Homem de Ferro',
			releaseDate: '2007-01-23'
		},
		{
			id: 225,
			poster: 'http://image.tmdb.org/t/p/w500/582WZKW2h6xtOx0Fd9eY5bIqIuz.jpg',
			title: 'O Homem de Ferro',
			releaseDate: '1981-07-27'
		},
		{
			id: 41428,
			poster: 'http://image.tmdb.org/t/p/w500/zEzJP8F9EawE1FQySR6ppCyAEX.jpg',
			title: 'Tetsuo: O Homem de Ferro',
			releaseDate: '1989-07-01'
		},
		{
			id: 97430,
			poster: 'http://image.tmdb.org/t/p/w500/4KzlFgE0HYNmekGxSEg10RfDDq4.jpg',
			title: 'O Homem com Punhos de Ferro',
			releaseDate: '2012-11-02'
		},
		{
			id: 9313,
			poster: 'http://image.tmdb.org/t/p/w500/k9urO3enqeMgSjb6br1iSUj4Wq7.jpg',
			title: 'O Homem da Máscara de Ferro',
			releaseDate: '1998-03-12'
		},
		{
			id: 321494,
			poster: 'http://image.tmdb.org/t/p/w500/9lzYqxDYJIYKmL5F7YqeWsl5VCM.jpg',
			title: 'O Homem com Punhos de Ferro 2',
			releaseDate: '2015-03-10'
		},
		{
			id: 43836,
			poster: 'http://image.tmdb.org/t/p/w500/hqPu1WEvfZr9nzNMcd06RFDJ2tA.jpg',
			title: 'O Homem da Máscara de Ferro',
			releaseDate: '1939-07-13'
		},
		{
			id: 4199,
			poster: 'http://image.tmdb.org/t/p/w500/g5kFK5AtJ8Gh92UQ4rvxiOFmEsp.jpg',
			title: 'O Homem da Máscara de Ferro',
			releaseDate: '1977-07-07'
		},
		{
			id: 339259,
			poster: 'http://image.tmdb.org/t/p/w500/fcbc9eryrsnOgVrUZREXjxfnim4.jpg',
			title: 'O Homem do Coração de Ferro',
			releaseDate: '2017-05-25'
		}
	]
};

export const Loading: ComponentStory<typeof ListResults> = (args) => <ListResults {...args} />;

Loading.args = {
	search: 'Homem de Ferro',
	results: undefined
};

export const NotFound: ComponentStory<typeof ListResults> = (args) => <ListResults {...args} />;

NotFound.args = {
	search: 'Homem de Gelatina',
	results: []
};
