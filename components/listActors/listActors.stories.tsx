import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ActorItemData } from 'lib/types';

import { ListActors } from './listActors';

export default {
	title: 'Components/List Actors',
	component: ListActors,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof ListActors>;

export const Default: ComponentStory<typeof ListActors> = (args) => <ListActors {...args} />;

Default.args = {
	actors: [
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
