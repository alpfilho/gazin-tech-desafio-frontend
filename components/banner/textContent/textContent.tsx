import React, { MutableRefObject, useEffect } from 'react';
import { useAnimation, useTransform } from 'framer-motion';

import { TextContentContainer, Synopsis, Title } from './textContent.styles';

interface TextContentI {
	prevIndexRef: MutableRefObject<number>;
	slideIndex: number;
	itemIndex: number;
	title: string;
	overview: string;
}

export const TextContent: React.FC<TextContentI> = ({
	prevIndexRef,
	slideIndex,
	itemIndex,
	title,
	overview
}) => {
	const animationControl = useAnimation();

	useEffect(() => {
		animationControl.stop();

		/* caso seja algum dos que mudaram */
		if (
			slideIndex !== prevIndexRef.current &&
			(slideIndex === itemIndex || prevIndexRef.current === itemIndex)
		) {
			if (slideIndex === itemIndex) {
				// entrada
				animationControl.set({ opacity: 0, x: '25%' });
				animationControl.start({ opacity: 1, x: '0%' });
			} else if (prevIndexRef.current === itemIndex) {
				// saída
				animationControl.start({ opacity: 0, x: '-25%' });
			}
		}

		return () => {
			animationControl.stop();
		};
	}, [animationControl, itemIndex, prevIndexRef, slideIndex]);

	return (
		<TextContentContainer
			initial={{ opacity: slideIndex === itemIndex ? 1 : 0 }}
			animate={animationControl}
		>
			<Title>{title}</Title>
			<Synopsis>{overview}</Synopsis>
		</TextContentContainer>
	);
};
