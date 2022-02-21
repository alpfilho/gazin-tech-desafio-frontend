import { useViewport } from '@hooks/useViewport';
import { memo, ReactElement, isValidElement } from 'react';

interface DeviceSwitchI {
	smartphone?: ReactElement;
	tablet?: ReactElement;
	desktop?: ReactElement;
}

export const DeviceSwitcher = memo<DeviceSwitchI>(function DeviceSwitch({
	smartphone,
	tablet,
	desktop
}) {
	const { device } = useViewport();

	if (device === 'smartphone') {
		if (isValidElement(smartphone)) {
			return smartphone;
		}
		if (isValidElement(tablet)) {
			return tablet;
		}
	}

	if (device === 'tablet') {
		if (isValidElement(tablet)) {
			return tablet;
		}
	}

	if (isValidElement(desktop)) {
		return desktop;
	}

	return null;
});
