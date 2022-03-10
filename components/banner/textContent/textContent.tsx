import React, { MutableRefObject } from 'react';

import { TextContentContainer, Synopsis, Title } from './textContent.styles';

export const TextContent: React.FC<{
	prevIndexRef: MutableRefObject<number>;
	activeSlide: number;
	slideLength: number;
	itemIndex: number;
	title: string;
	overview: string;
}> = ({ prevIndexRef, itemIndex, activeSlide, slideLength, title, overview }) => {
	const state = activeSlide === itemIndex ? 'active' : 'hidden';
	const prevSlide = prevIndexRef.current;

	/* Ilusão de loop: */
	let isRightDirection;

	if (activeSlide === slideLength - 1) {
		if (prevSlide === 0) {
			isRightDirection = false;
		} else {
			isRightDirection = true;
		}
	} else if (activeSlide === 0) {
		if (prevSlide === slideLength - 1) {
			isRightDirection = true;
		} else {
			isRightDirection = false;
		}
	} else {
		isRightDirection = prevIndexRef.current < activeSlide;
	}

	return (
		<TextContentContainer
			initial={false}
			variants={{
				active: {
					x: '0%',
					opacity: 1,
					transition: {
						opacity: {
							from: 0,
							type: 'tween',
							duration: 0.33
						},
						x: {
							from: isRightDirection ? '25%' : '-25%',
							type: 'spring',
							mass: 1,
							stiffness: 200,
							damping: 30
						}
					}
				},
				hidden: {
					opacity: 0,
					x: isRightDirection ? '-25%' : '25%',
					transition: {
						opacity: {
							type: 'tween',
							duration: 0.33
						},
						y: {
							type: 'spring',
							mass: 1,
							stiffness: 200,
							damping: 30
						}
					}
				}
			}}
			animate={state}
		>
			<Title>{title}</Title>
			<Synopsis>{overview}</Synopsis>
		</TextContentContainer>
	);
};
