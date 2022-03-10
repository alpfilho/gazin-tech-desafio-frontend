import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	LeftControlButton,
	ControlIconContainer,
	RightControlButton
} from './sliderControl.styles';

interface SliderControlI {
	type: 'left' | 'right';
	controlFn: () => void;
	color?: 'white' | 'yellow';
	show?: boolean;
}

export const SliderControl: React.FC<SliderControlI> = ({
	type,
	controlFn,
	color: colorType = 'white',
	show = false
}) => {
	const { colors } = useTheme();
	const color = colorType === 'yellow' ? colors.yellow : colors.white;
	const animate = { opacity: show ? 1 : 0 };

	const onClick = useCallback(() => {
		if (show && controlFn) {
			controlFn();
		}
	}, [show, controlFn]);

	if (type === 'left') {
		return (
			<LeftControlButton
				data-testid="slider-control"
				onClick={onClick}
				whileTap={{ x: '-1em' }}
				animate={animate}
				show={show ? 'true' : undefined}
			>
				<ControlIconContainer>
					<FontAwesomeIcon icon={faChevronLeft} color={color} />
				</ControlIconContainer>
			</LeftControlButton>
		);
	} else {
		return (
			<RightControlButton
				data-testid="slider-control"
				onClick={onClick}
				whileTap={{ x: '1em' }}
				animate={animate}
				show={show ? 'true' : undefined}
			>
				<ControlIconContainer>
					<FontAwesomeIcon icon={faChevronRight} color={color} />
				</ControlIconContainer>
			</RightControlButton>
		);
	}
};
