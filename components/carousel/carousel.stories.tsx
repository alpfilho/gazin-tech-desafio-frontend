import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ActorItemData, MovieItemData } from 'lib/types';

import { Carousel } from './carousel';

export default {
	title: 'Components/Carousel',
	component: Carousel,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof Carousel>;

export const WithMovies: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

WithMovies.args = {
	type: 'movie',
	data: [
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

export const WithActors: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

WithActors.args = {
	type: 'actor',
	data: [
		{
			id: 17142,
			name: 'Paul Dano',
			birthday: '1984-06-19',
			profile: 'http://image.tmdb.org/t/p/h632/tHsaqfauzG4MuFs5oCbq0pRy5EF.jpg'
		},
		{
			id: 1136406,
			name: 'Tom Holland',
			birthday: '1996-06-01',
			profile: 'http://image.tmdb.org/t/p/h632/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg'
		},
		{
			id: 1972974,
			name: 'Isabel May',
			birthday: '2000-11-21',
			profile: 'http://image.tmdb.org/t/p/h632/9AT39NSHNQ44VebDrqupxplmyLK.jpg'
		},
		{
			id: 224513,
			name: 'Ana de Armas',
			birthday: '1988-04-30',
			profile: 'http://image.tmdb.org/t/p/h632/14uxt0jH28J9zn4vNQNTae3Bmr7.jpg'
		},
		{
			id: 2037,
			name: 'Cillian Murphy',
			birthday: '1976-05-25',
			profile: 'http://image.tmdb.org/t/p/h632/i8dOTC0w6V274ev5iAAvo4Ahhpr.jpg'
		},
		{
			id: 11288,
			name: 'Robert Pattinson',
			birthday: '1986-05-13',
			profile: 'http://image.tmdb.org/t/p/h632/8A4PS5iG7GWEAVFftyqMZKl3qcr.jpg'
		},
		{
			id: 37153,
			name: 'Zoë Kravitz',
			birthday: '1988-12-01',
			profile: 'http://image.tmdb.org/t/p/h632/zx74kkI931iiQATJybvRKWYnOe9.jpg'
		},
		{
			id: 1290466,
			name: 'Barry Keoghan',
			birthday: '1992-10-17',
			profile: 'http://image.tmdb.org/t/p/h632/15xPjrzSbtXlbQUhmLpQUil4tCN.jpg'
		},
		{
			id: 1190668,
			name: 'Timothée Chalamet',
			birthday: '1995-12-27',
			profile: 'http://image.tmdb.org/t/p/h632/7ioltgPplAfff9tPK1QVZnAKRsg.jpg'
		},
		{
			id: 6384,
			name: 'Keanu Reeves',
			birthday: '1964-09-02',
			profile: 'http://image.tmdb.org/t/p/h632/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg'
		},
		{
			id: 90633,
			name: 'Gal Gadot',
			birthday: '1985-04-30',
			profile: 'http://image.tmdb.org/t/p/h632/plLfB60M5cJrnog8KvAKhI4UJuk.jpg'
		},
		{
			id: 1522703,
			name: 'Hande Erçel',
			birthday: '1993-11-24',
			profile: 'http://image.tmdb.org/t/p/h632/lskwPjNLTuH0hZsuDKErWinhv8E.jpg'
		},
		{
			id: 130640,
			name: 'Hailee Steinfeld',
			birthday: '1996-12-11',
			profile: 'http://image.tmdb.org/t/p/h632/q4UpZMEuvNCN5lL5L6xa3ICpheJ.jpg'
		},
		{
			id: 505710,
			name: 'Zendaya',
			birthday: '1996-09-01',
			profile: 'http://image.tmdb.org/t/p/h632/xWOU0S7AqGEkyk8scLwwz66R2GO.jpg'
		},
		{
			id: 1158,
			name: 'Al Pacino',
			birthday: '1940-04-25',
			profile: 'http://image.tmdb.org/t/p/h632/fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg'
		},
		{
			id: 56734,
			name: 'Chloë Grace Moretz',
			birthday: '1997-02-10',
			profile: 'http://image.tmdb.org/t/p/h632/yq4rYmaTRC5degaOYmJQFpaiho1.jpg'
		},
		{
			id: 6614,
			name: 'Cole Hauser',
			birthday: '1975-03-22',
			profile: 'http://image.tmdb.org/t/p/h632/kJyUtNZREd7mes21OrWiCtOugPL.jpg'
		},
		{
			id: 1260401,
			name: 'Pataratida Patcharawirapong',
			birthday: '1984-09-13',
			profile: 'http://image.tmdb.org/t/p/h632/vrFwx5FWoRWikuHt3fa25Bfkzhd.jpg'
		},
		{
			id: 115440,
			name: 'Sydney Sweeney',
			birthday: '1997-09-12',
			profile: 'http://image.tmdb.org/t/p/h632/qoFGtNZu0OSd1xggj1VyClxwuF7.jpg'
		},
		{
			id: 1172108,
			name: 'Mckenna Grace',
			birthday: '2006-06-25',
			profile: 'http://image.tmdb.org/t/p/h632/jQLBM6ErQnvU8QqNvW8KKF9y8N0.jpg'
		}
	] as ActorItemData[]
};
