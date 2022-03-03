import React, { useEffect } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { ActorDetailData, ItemMovieData } from 'lib/types';

import { getPopularActors } from 'lib/getPopularActors';
import { getActorDetail } from 'lib/getActorDetail';
import { makeProfilePath } from 'lib/utils/makeProfilePath';
import { getApiConfiguration } from 'lib/getApiConfiguration';

import { AppPage } from 'components/appPage';
import { Section } from 'components/section';
import { Title } from 'components/title';
import { ListFilms } from 'components/listFilms';
import { makePosterPath } from 'lib/utils/makePosterPath';

const ActorDetail: NextPage<{ actorDetail: ActorDetailData }> = ({ actorDetail }) => {
	useEffect(() => {
		console.log(actorDetail);
	});

	return (
		<AppPage>
			<Head>
				<title>{`${
					actorDetail.name ? `${actorDetail.name} | ` : 'Não encontrado | '
				}GazinFilms`}</title>
			</Head>
			<Section>
				<Title>Biografia</Title>
			</Section>
			<Section>
				<Title>Filmografia</Title>
				<ListFilms movies={[]} />
			</Section>
		</AppPage>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const popularActors = await getPopularActors(1);
	const paths = popularActors.map(({ id }) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: 'blocking'
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (params && typeof params.id === 'string') {
		try {
			const apiConfig = await getApiConfiguration();
			const actorData = await getActorDetail(params.id, true);
			const actorDetail = {
				id: actorData.id,
				name: actorData.name,
				biography: actorData.biography,
				placeOfBirth: actorData.place_of_birth,
				profile: makeProfilePath(actorData.profile_path, apiConfig.images.base_url),
				birthday: actorData.birthday,
				filmography: actorData.movie_credits.cast.map(
					({ id, title, release_date, poster_path }) =>
						({
							id,
							title,
							releaseDate: release_date ? release_date : null,
							poster: makePosterPath(poster_path, apiConfig.images.base_url)
						} as ItemMovieData)
				)
			} as ActorDetailData;

			return {
				props: {
					actorDetail
				},
				/* Refaz a página a cada 24 horas */
				revalidate: 24 * 60 * 60
			};
		} catch (error) {
			return {
				notFound: true
			};
		}
	}

	return {
		notFound: true
	};
};

export default ActorDetail;
