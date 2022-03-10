import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { MovieItemData } from 'lib/types';

import { ListFilms } from './listFilms';

export default {
	title: 'Components/List Films',
	component: ListFilms,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof ListFilms>;

export const Default: ComponentStory<typeof ListFilms> = (args) => <ListFilms {...args} />;

Default.args = {
	movies: [
		{
			id: 634649,
			title: 'Homem-Aranha: Sem Volta Para Casa',
			poster: 'http://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
			releaseDate: '2021-12-16'
		},
		{
			id: 414906,
			title: 'Batman',
			poster: 'http://image.tmdb.org/t/p/w500/cKNxg77ll8caX3LulREep4C24Vx.jpg',
			releaseDate: '2022-03-03'
		},
		{
			id: 833425,
			title: 'Sem Saída',
			poster: 'http://image.tmdb.org/t/p/w500/dvTTuRqwvM6wkDuA0JviE58NSRp.jpg',
			releaseDate: '2022-02-25'
		},
		{
			id: 568124,
			title: 'Encanto',
			poster: 'http://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
			releaseDate: '2021-11-24'
		},
		{
			id: 476669,
			title: "King's Man: A Origem",
			poster: 'http://image.tmdb.org/t/p/w500/pVL9AyKKLfUwrYD6jhdsI15gBQ7.jpg',
			releaseDate: '2022-01-06'
		},
		{
			id: 646385,
			title: 'Pânico',
			poster: 'http://image.tmdb.org/t/p/w500/2PYQKeDhFwP5IX7EnIpCComBqj8.jpg',
			releaseDate: '2022-01-13'
		},
		{
			id: 800510,
			title: 'Kimi: Alguém Está Escutando',
			poster: 'http://image.tmdb.org/t/p/w500/DUNRzBjRKE1pvl2jiiooDLafKf.jpg',
			releaseDate: '2022-02-10'
		},
		{
			id: 890656,
			title: 'Golpes de Vingança',
			poster: 'http://image.tmdb.org/t/p/w500/AbSz0ygA92OpwiYDTBVFA8Cf4Aw.jpg',
			releaseDate: '2022-02-17'
		},
		{
			id: 524434,
			title: 'Eternos',
			poster: 'http://image.tmdb.org/t/p/w500/mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg',
			releaseDate: '2021-11-04'
		},
		{
			id: 928381,
			title: 'Um Dia Difícil',
			poster: 'http://image.tmdb.org/t/p/w500/bktIW44oeurTptHLdkj7ayc4zbH.jpg',
			releaseDate: '2022-02-25'
		},
		{
			id: 597208,
			title: 'O Beco do Pesadelo',
			poster: 'http://image.tmdb.org/t/p/w500/9HnTq2Kg0R4YpdB1B5r91mFt0S2.jpg',
			releaseDate: '2022-01-27'
		},
		{
			id: 774825,
			title: 'A Era do Gelo: As Aventuras de Buck',
			poster: 'http://image.tmdb.org/t/p/w500/1iVjKCGHPVNj7IQVB1DdpL8U7Y8.jpg',
			releaseDate: '2022-01-28'
		},
		{
			id: 585083,
			title: 'Hotel Transilvânia: Transformonstrão',
			poster: 'http://image.tmdb.org/t/p/w500/9PbtCo5IIkd26WPQfZUpPyn6fTz.jpg',
			releaseDate: '2022-01-14'
		},
		{
			id: 632727,
			title: 'O Massacre da Serra Elétrica: O Retorno de Leatherface',
			poster: 'http://image.tmdb.org/t/p/w500/4YMiQNAHpfm4sx8f5dL5zKWSFdc.jpg',
			releaseDate: '2022-02-18'
		},
		{
			id: 783461,
			title: 'Um Looop Eterno',
			poster: 'http://image.tmdb.org/t/p/w500/b0cR03jYbO2hTrKnLVKQNRP8r6y.jpg',
			releaseDate: '2022-02-04'
		},
		{
			id: 512195,
			title: 'Alerta Vermelho',
			poster: 'http://image.tmdb.org/t/p/w500/pe17f8VDfzbvbHSAKAlcORtBHmW.jpg',
			releaseDate: '2021-11-12'
		},
		{
			id: 438695,
			title: 'Sing 2',
			poster: 'http://image.tmdb.org/t/p/w500/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg',
			releaseDate: '2022-01-06'
		},
		{
			id: 580489,
			title: 'Venom: Tempo de Carnificina',
			poster: 'http://image.tmdb.org/t/p/w500/h5UzYZquMwO9FVn15R2eK2itmHu.jpg',
			releaseDate: '2021-10-07'
		},
		{
			id: 624860,
			title: 'Matrix Resurrections',
			poster: 'http://image.tmdb.org/t/p/w500/9DT4WVqZqBEI9Kub18gZ3m1D89m.jpg',
			releaseDate: '2021-12-22'
		},
		{
			id: 460458,
			title: 'Resident Evil: Bem-Vindo a Raccoon City',
			poster: 'http://image.tmdb.org/t/p/w500/tnKi8Vx9mRvOGrmzBOOh5wHEbQI.jpg',
			releaseDate: '2021-12-02'
		}
	] as MovieItemData[]
};
