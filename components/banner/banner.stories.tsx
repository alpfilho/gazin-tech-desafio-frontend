import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Banner } from './banner';

export default {
	title: 'Home/Banner',
	component: Banner,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof Banner>;

export const Default: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

Default.args = {
	movies: [
		{
			id: 414906,
			title: 'Batman',
			overview:
				'Bruce Wayne é um jovem bilionário da cidade de Gotham City, Nova Jersey, que também age secretamente como o vigilante noturno Batman após o assassinato dos seus pais.',
			backdrop: 'http://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg',
			rating: 8.1
		},
		{
			id: 634649,
			title: 'Homem-Aranha: Sem Volta Para Casa',
			overview:
				'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.',
			backdrop: 'http://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
			rating: 8.3
		},
		{
			id: 476669,
			title: "King's Man: A Origem",
			overview:
				'Quando uma série dos piores tiranos e gênios do crime da história se juntam para criar uma guerra que aniquilará milhões, um homem e seu pupilo precisam correr contra o tempo para pará-los.',
			backdrop: 'http://image.tmdb.org/t/p/original/oQPbZ5e6J9fuAyv4Gl0mMZMIyPI.jpg',
			rating: 7
		},
		{
			id: 823625,
			title: 'Agente das Sombras',
			overview:
				'Confiança, identidade e o perigo do poder sem controle levam um agente secreto ao limite. Travis Block (Liam Neeson) vive e luta nas sombras. Um “consertador” autônomo do governo, Block é um homem perigoso cujas atribuições incluíam extrair agentes de situações ocultas. Quando Block descobre que um programa sombrio chamado Operação Unidade está abatendo cidadãos comuns por razões conhecidas apenas pelo seu supervisor, o chefe do FBI, Robinson (Aidan Quinn), ele pede a ajuda de uma jornalista (Raver-Lampman), mas seu passado e presente colidem quando seu filha e neta são ameaçadas. Agora Block precisa resgatar as pessoas que ama e expor a verdade para uma chance de redenção. Nada nem ninguém está seguro quando os segredos estão escondidos nas sombras.',
			backdrop: 'http://image.tmdb.org/t/p/original/2hGjmgZrS1nlsEl5PZorn7EsmzH.jpg',
			rating: 5.1
		},
		{
			id: 511809,
			title: 'Amor, Sublime Amor',
			overview:
				'Dois jovens de gangues rivais de Nova York se apaixonam, mas as tensões entre seus respectivos amigos se transformam em tragédia. Remake do filme de 1961.',
			backdrop: 'http://image.tmdb.org/t/p/original/opM1iONReaoQSn0soOgCtDOGdnA.jpg',
			rating: 7.4
		},
		{
			id: 646385,
			title: 'Pânico',
			overview:
				'Vinte e cinco anos após uma série de crimes brutais chocar a tranquila Woodsboro, um novo assassino se apropria da máscara de Ghostface e começa a perseguir um grupo de adolescentes para trazer à tona segredos do passado mortal da cidade.',
			backdrop: 'http://image.tmdb.org/t/p/original/usaZV7KB6Man9Rm9TyDAeQf7uVD.jpg',
			rating: 6.8
		},
		{
			id: 836009,
			title: 'Contra o Gelo',
			overview:
				'Dois homens lutam pela sobrevivência durante uma expedição à Groenlândia em busca de um mapa perdido. Baseado em uma história real ocorrida na Dinamarca em 1909.',
			backdrop: 'http://image.tmdb.org/t/p/original/bnMKMhGJuvELSjRp8KpkuDsBDw2.jpg',
			rating: 7
		},
		{
			id: 833425,
			title: 'Sem Saída',
			overview:
				'Darby Thorne é uma mulher que viaja devido a uma emergência familiar, fica presa em nevasca e é forçada a se abrigar numa área de descanso na estrada com um grupo de desconhecidos. Ao topar com uma garota sequestrada numa van, ela encara uma terrível luta de vida ou morte para descobrir quem é o sequestrador.',
			backdrop: 'http://image.tmdb.org/t/p/original/33wnBK5NxvuKQv0Cxo3wMv0eR7F.jpg',
			rating: 6.3
		},
		{
			id: 591120,
			title: 'Os Piratas: Em Busca do Tesouro Perdido',
			overview:
				'Durante a Dinastia Joseon, uma corajosa tripulação de piratas e bandidos luta contra adversidades, pistas intrigantes e rivais em busca do ouro real perdido no mar.',
			backdrop: 'http://image.tmdb.org/t/p/original/pwpw1veVNW2Sls5sGbA9mqMYN49.jpg',
			rating: 6.6
		},
		{
			id: 632727,
			title: 'O Massacre da Serra Elétrica: O Retorno de Leatherface',
			overview:
				'Nesta sequência, um grupo de jovens decide dar vida nova a uma cidade fantasma no Texas, mas acaba se deparando com Leatherface, o famoso maníaco da serra elétrica.',
			backdrop: 'http://image.tmdb.org/t/p/original/aTSA5zMWlVFTYBIZxTCMbLkfOtb.jpg',
			rating: 5.1
		}
	]
};
