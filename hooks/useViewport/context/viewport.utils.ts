import { DeviceType } from './viewport.types';

export const screenSizesMaxWidth = {
	smartphone: 768,
	tablet: 960,
	smallDevice: 1024,
	mediumDevice: 1366,
	largeDevice: 1600,
	fullhd: 1920
};

export const getViewportWidth = (): number => {
	return window.innerWidth || 0;
};

export const getViewportHeight = (): number => {
	return window.innerHeight || 0;
};

export const getScrollY = (): number => {
	return window.pageYOffset || 0;
};

export const getElementScrollOffset = (element: HTMLElement): number => {
	return element.getBoundingClientRect().top + getScrollY();
};

export const getDeviceType = (viewportWidth: number): DeviceType => {
	if (viewportWidth <= screenSizesMaxWidth.smartphone) {
		return 'smartphone';
	}
	if (viewportWidth <= screenSizesMaxWidth.tablet) {
		return 'tablet';
	}
	return 'desktop';
};
