import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Details } from './details';

export default {
	title: 'Components/Details',
	component: Details,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof Details>;

export const MovieDetail: ComponentStory<typeof Details> = (args) => <Details {...args} />;

MovieDetail.args = {
	type: 'movie',
	movie: {
		id: 634649,
		title: 'Homem-Aranha: Sem Volta Para Casa',
		poster: 'http://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
		backdrop: 'http://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
		overview:
			'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.',
		rating: 8.3
	}
};

export const ActorDetail: ComponentStory<typeof Details> = (args) => <Details {...args} />;

ActorDetail.args = {
	type: 'actor',
	actor: {
		id: 1136406,
		name: 'Tom Holland',
		biography:
			'Thomas "Tom" Holland é um ator e dançarino inglês, mais conhecido por interpretar o papel principal em Billy Elliot the Musical no Victoria Palace Theatre, Londres, bem como para estrelar o filme de 2012 O Impossível. Por último papel, ele se tornou um vencedor do Hollywood Spotlight Award, bem como do National Board of Review’s award no "Breakthrough Actor" categoria do London Film Critics Circle Awards 2012 em “Young British Performer of the Year”. Ele foi destaque em no Screen International’s “UK Stars of Tomorrow – 2012” e em Variety’s “Youth Impact Report 2012”.',
		placeOfBirth: 'Surrey, England, UK',
		profile: 'http://image.tmdb.org/t/p/h632/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg',
		birthday: '1996-06-01',
		filmography: [
			{
				id: 315635,
				title: 'Homem-Aranha: De Volta ao Lar',
				releaseDate: '2017-07-05',
				poster: 'http://image.tmdb.org/t/p/w500/9Fgs1ewIZiBBTto1XDHeBN0D8ug.jpg'
			},
			{
				id: 340442,
				title: 'A Peregrinação',
				releaseDate: '2017-04-23',
				poster: 'http://image.tmdb.org/t/p/w500/8lPbdCha7QzGWeHL6HW9Wq0sfso.jpg'
			},
			{
				id: 335787,
				title: 'Uncharted: Fora do Mapa',
				releaseDate: '2022-02-10',
				poster: 'http://image.tmdb.org/t/p/w500/tBrbDkZSiWbCEOpIV8GaDcPFDet.jpg'
			},
			{
				id: 499932,
				title: 'O Diabo de Cada Dia',
				releaseDate: '2020-09-11',
				poster: 'http://image.tmdb.org/t/p/w500/spqWjgLWvWlluIodXFn1SsNtISC.jpg'
			},
			{
				id: 508439,
				title: 'Dois Irmãos: Uma Jornada Fantástica',
				releaseDate: '2020-02-29',
				poster: 'http://image.tmdb.org/t/p/w500/jsi2UM64Mhr6NmY1LKeeCuZOaCo.jpg'
			},
			{
				id: 544401,
				title: 'Cherry: Inocência Perdida',
				releaseDate: '2021-02-26',
				poster: 'http://image.tmdb.org/t/p/w500/qbSsR0IfnxdXZqfRMpH2PgLAbPV.jpg'
			},
			{
				id: 429617,
				title: 'Homem-Aranha: Longe de Casa',
				releaseDate: '2019-06-28',
				poster: 'http://image.tmdb.org/t/p/w500/tX0o4AdHpidgniTWwfzK0dNTKrc.jpg'
			},
			{
				id: 634649,
				title: 'Homem-Aranha: Sem Volta Para Casa',
				releaseDate: '2021-12-15',
				poster: 'http://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg'
			},
			{
				id: 626329,
				title: "A Fan's Guide to Spider-Man: Homecoming",
				releaseDate: '2017-06-03',
				poster: 'http://image.tmdb.org/t/p/w500/aXXkTxJbZJ8R9I3N47ekFiLkM1W.jpg'
			},
			{
				id: 402446,
				title: 'Inverno Rigoroso',
				releaseDate: '2016-07-31',
				poster: 'http://image.tmdb.org/t/p/w500/6SyQ9ebUm90yPrIfQtIKvrFwxnj.jpg'
			},
			{
				id: 412656,
				title: 'Mundo em Caos',
				releaseDate: '2021-02-24',
				poster: 'http://image.tmdb.org/t/p/w500/oMSumadgRiygK1DUtBurdnZb9Jz.jpg'
			},
			{
				id: 431693,
				title: 'Um Espião Animal',
				releaseDate: '2019-12-04',
				poster: 'http://image.tmdb.org/t/p/w500/aAOKVhTESY4tMqjDPn3KW4ugnFn.jpg'
			},
			{
				id: 758025,
				title: "Peter's To-Do List",
				releaseDate: '2019-09-17',
				poster: 'http://image.tmdb.org/t/p/w500/wf7SV7nSgxjSB9nCcCZGkwWTAdd.jpg'
			},
			{
				id: 806061,
				title: 'Beneath a Scarlet Sky',
				releaseDate: null,
				poster: 'http://image.tmdb.org/t/p/w500/loeeZwa4eD2kAz7Uau5AxDNm7pc.jpg'
			},
			{
				id: 912227,
				title: 'Untitled Fred Astaire Biopic',
				releaseDate: null,
				poster: 'http://image.tmdb.org/t/p/w500/hhXJpBZhmtT1vsuxti5H7O3uZuy.jpg'
			},
			{
				id: 80278,
				title: 'O Impossível',
				releaseDate: '2012-09-09',
				poster: 'http://image.tmdb.org/t/p/w500/sLSQBkyrn2r7UfZxefZNrIMNmhP.jpg'
			},
			{
				id: 162215,
				title: 'Essa é Minha Vida',
				releaseDate: '2013-09-10',
				poster: 'http://image.tmdb.org/t/p/w500/zhi5c0OTASFBcupzprU0C2a7sFN.jpg'
			},
			{
				id: 314095,
				title: 'Z: A Cidade Perdida',
				releaseDate: '2017-03-15',
				poster: 'http://image.tmdb.org/t/p/w500/ms4UmEmc0cyK5AN2EGPfadkbXae.jpg'
			},
			{
				id: 414017,
				title: 'Tweet',
				releaseDate: '2015-06-16',
				poster: 'http://image.tmdb.org/t/p/w500/sZ6WoTwv7nXux9KvYJCcOKZjcUA.jpg'
			},
			{
				id: 411587,
				title: 'Moments',
				releaseDate: '2013-07-23',
				poster: ''
			},
			{
				id: 210479,
				title: 'Locke',
				releaseDate: '2014-04-10',
				poster: 'http://image.tmdb.org/t/p/w500/fMotwVtyUr833goyv7EzgAp0bCR.jpg'
			},
			{
				id: 418879,
				title: 'A Batalha das Correntes',
				releaseDate: '2017-09-13',
				poster: 'http://image.tmdb.org/t/p/w500/1hXJRUdM785ogYuaOo0lXWjOCda.jpg'
			},
			{
				id: 205775,
				title: 'No Coração do Mar',
				releaseDate: '2015-11-20',
				poster: 'http://image.tmdb.org/t/p/w500/v0f6zLv2TwhscRFDRnbcw8McBeI.jpg'
			},
			{
				id: 299536,
				title: 'Vingadores: Guerra Infinita',
				releaseDate: '2018-04-25',
				poster: 'http://image.tmdb.org/t/p/w500/89QTZmn34iwXYeCpVxhC9UrT8sX.jpg'
			},
			{
				id: 299534,
				title: 'Vingadores: Ultimato',
				releaseDate: '2019-04-24',
				poster: 'http://image.tmdb.org/t/p/w500/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg'
			},
			{
				id: 448119,
				title: 'Dolittle',
				releaseDate: '2020-01-01',
				poster: 'http://image.tmdb.org/t/p/w500/tsa2NZ3QzR6zHg2e20yJfSOhUnS.jpg'
			},
			{
				id: 271110,
				title: 'Capitão América: Guerra Civil',
				releaseDate: '2016-04-27',
				poster: 'http://image.tmdb.org/t/p/w500/8IoDJYGMoo4nEkjGADW2TtZRoWF.jpg'
			},
			{
				id: 298931,
				title: 'Billy Elliot: The Musical Live',
				releaseDate: '2014-09-28',
				poster: 'http://image.tmdb.org/t/p/w500/bGRC2gZZe3DJhaoY0qo3cHfS0pt.jpg'
			},
			{
				id: 662151,
				title: "Celebrating Marvel's Stan Lee",
				releaseDate: '2019-12-20',
				poster: 'http://image.tmdb.org/t/p/w500/8qlFNCxQQOLfnqwRcHY6WMkb7tF.jpg'
			},
			{
				id: 580489,
				title: 'Venom: Tempo de Carnificina',
				releaseDate: '2021-09-30',
				poster: 'http://image.tmdb.org/t/p/w500/h5UzYZquMwO9FVn15R2eK2itmHu.jpg'
			}
		]
	}
};
