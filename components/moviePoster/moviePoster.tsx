import Image from 'next/image';
import React from 'react';

import {
	MoviePosterContainer,
	PosterContent,
	MovieImage,
	MovieImageContent
} from './moviePoster.styles';

export interface MoviePosterI {
	url?: string;
}

export const MoviePoster: React.FC<MoviePosterI> = ({ url }) => (
	<MoviePosterContainer>
		<PosterContent>
			<MovieImage>
				<MovieImageContent>
					{url && (
						<Image
							src={url}
							alt=""
							layout="fill"
							objectPosition="center center"
							objectFit="cover"
						/>
					)}
				</MovieImageContent>
			</MovieImage>
		</PosterContent>
	</MoviePosterContainer>
);
