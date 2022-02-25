import React, { useEffect, useRef } from 'react';
import { useMotionValue, animate } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

import { ImbdLogoContainer, RatingContainer, StarContainer, Rating } from './imdbRating.styles';

export const ImdbRating: React.FC<{ canRate: boolean; rating?: number }> = ({
	canRate,
	rating = 0
}) => {
	const ratingValueContentRef = useRef<HTMLDivElement>(null);
	const ratingValue = useMotionValue(0);

	useEffect(() => {
		if (ratingValueContentRef.current) {
			ratingValueContentRef.current.innerHTML = `0 / 10`;
		}

		ratingValue.onChange((value) => {
			if (ratingValueContentRef.current) {
				ratingValueContentRef.current.innerHTML = `${Math.min(10, Math.max(0, value)).toPrecision(
					2
				)} / 10`;
			}
		});

		return () => {
			ratingValue.clearListeners();
		};
	}, [ratingValue]);

	useEffect(() => {
		if (canRate) {
			const animationControl = animate(ratingValue, rating, {
				type: 'spring',
				stiffness: 300,
				damping: 50
			});
			return () => {
				animationControl.stop();
			};
		}
	}, [canRate, rating, ratingValue]);

	return (
		<RatingContainer
			initial={{
				y: '-30%',
				opacity: 0
			}}
			animate={{
				y: canRate ? '0%' : '-30%',
				opacity: canRate ? 1 : 0
			}}
			transition={{
				y: {
					type: 'spring',
					stiffness: 300,
					damping: 50
				},
				opacity: {
					type: 'tween',
					ease: 'linear',
					duration: 0.5
				}
			}}
		>
			<StarContainer>
				<FontAwesomeIcon icon={faStar} color="#FFB800" />
			</StarContainer>

			<Rating ref={ratingValueContentRef} />

			<ImbdLogoContainer>
				<FontAwesomeIcon icon={faImdb} color="#FFB800" />
			</ImbdLogoContainer>
		</RatingContainer>
	);
};
