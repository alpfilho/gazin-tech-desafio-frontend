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
				const ratingValue = value.toFixed(1);
				const ratingValueFloat = parseFloat(ratingValue);

				ratingValueContentRef.current.innerHTML = `${
					ratingValueFloat >= 10 ? 10 : ratingValueFloat <= 0 ? 0 : ratingValue
				} / 10`;
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
				damping: 50,
				restDelta: 0.1
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
