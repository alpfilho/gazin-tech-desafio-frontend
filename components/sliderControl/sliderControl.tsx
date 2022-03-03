import React from 'react';
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
}

export const SliderControl: React.FC<SliderControlI> = ({ type, controlFn }) => {
	const { colors } = useTheme();

	if (type === 'left') {
		return (
			<LeftControlButton onClick={controlFn}>
				<ControlIconContainer>
					<FontAwesomeIcon icon={faChevronLeft} color={colors.yellow} />
				</ControlIconContainer>
			</LeftControlButton>
		);
	} else {
		return (
			<RightControlButton onClick={controlFn}>
				<ControlIconContainer>
					<FontAwesomeIcon icon={faChevronRight} color={colors.yellow} />
				</ControlIconContainer>
			</RightControlButton>
		);
	}
};
