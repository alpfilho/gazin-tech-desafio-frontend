import React from 'react';
import Head from 'next/head';

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ActorDetailData, MovieItemData } from 'lib/types';

import { getApiConfiguration } from 'lib/getApiConfiguration';
import { getPopularActors } from 'lib/getPopularActors';
import { getActorDetail } from 'lib/getActorDetail';
import { makeProfilePath } from 'lib/utils/makeProfilePath';
import { makePosterPath } from 'lib/utils/makePosterPath';

import { AppPage } from 'components/appPage';
import { Details } from 'components/details';

const ActorDetail: NextPage<{ actorDetail: ActorDetailData }> = ({ actorDetail }) => (
	<AppPage>
		<Head>
			<title>{`${
				actorDetail.name ? `${actorDetail.name} | ` : 'Não encontrado | '
			}GazinFilms`}</title>
		</Head>
		<Details type="actor" actor={actorDetail} />
	</AppPage>
);

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
			const {
				images: { base_url }
			} = await getApiConfiguration();

			const { id, name, biography, place_of_birth, birthday, movie_credits, profile_path } =
				await getActorDetail(params.id, true);

			const actorDetail = {
				id,
				name,
				biography,
				placeOfBirth: place_of_birth,
				profile: makeProfilePath(profile_path, base_url),
				birthday,
				filmography: movie_credits.cast.map(
					({ id, title, release_date, poster_path }) =>
						({
							id,
							title,
							releaseDate: release_date ? release_date : null,
							poster: makePosterPath(poster_path, base_url)
						} as MovieItemData)
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
