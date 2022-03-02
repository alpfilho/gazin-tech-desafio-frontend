import React, { useEffect, useRef } from 'react';
import { useMotionValue, animate } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import {
	TmbdLogoContainer,
	RatingContainer,
	StarContainer,
	RatingText,
	Rating,
	RatingLimit
} from './tmdbRating.styles';
import { TmdbLogo } from 'components/tmdbLogo';

interface TmdbRatingI {
	rating?: number;
}

export const TmdbRating: React.FC<TmdbRatingI> = ({ rating = 0 }) => {
	const ratingValueContentRef = useRef<HTMLDivElement>(null);
	const ratingValue = useMotionValue(0);

	useEffect(() => {
		if (ratingValueContentRef.current) {
			ratingValueContentRef.current.innerHTML = '0';
		}

		ratingValue.onChange((value) => {
			if (ratingValueContentRef.current) {
				const ratingValue = value.toFixed(1);
				const ratingValueFloat = parseFloat(ratingValue);

				ratingValueContentRef.current.innerHTML = `${
					ratingValueFloat >= 10 ? 10 : ratingValueFloat <= 0 ? 0 : ratingValue
				}`;
			}
		});

		return () => {
			ratingValue.clearListeners();
		};
	}, [ratingValue]);

	useEffect(() => {
		const animationControl = animate(ratingValue, rating, {
			type: 'spring',
			stiffness: 300,
			damping: 50,
			restDelta: 0.1
		});
		return () => {
			animationControl.stop();
		};
	}, [rating, ratingValue]);

	return (
		<RatingContainer>
			<StarContainer>
				<FontAwesomeIcon icon={faStar} color="#FFB800" />
			</StarContainer>

			<RatingText>
				<Rating ref={ratingValueContentRef} />
				<RatingLimit>/ 10</RatingLimit>
			</RatingText>

			<TmbdLogoContainer>
				<TmdbLogo type="primary-short" />
			</TmbdLogoContainer>
		</RatingContainer>
	);
};
