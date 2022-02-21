import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { DeviceType, ViewportContextStateI, ViewportT } from './viewport.types';
import { getDeviceType, getScrollY, getViewportHeight, getViewportWidth } from './viewport.utils';

/**
 * Context
 */

export const ViewportContext = createContext<ViewportContextStateI>({
	device: 'desktop'
});

/**
 * Context Provider
 */

export const ViewportContextProvider: React.FC = ({ children }) => {
	const [device, setDevice] = useState<DeviceType>('desktop');

	const viewportRef = useRef<ViewportT>({
		height: undefined,
		width: undefined,
		scrollY: undefined
	});

	const onViewportChange = useCallback(() => {
		viewportRef.current.height = getViewportHeight();
		viewportRef.current.width = getViewportWidth();
		viewportRef.current.scrollY = getScrollY();

		const deviceType = getDeviceType(viewportRef.current.width);
		if (deviceType !== device) {
			setDevice(deviceType);
		}
	}, [device]);

	useEffect(() => {
		onViewportChange();

		window.addEventListener('scroll', onViewportChange, { passive: true });
		window.addEventListener('resize', onViewportChange, { passive: true });

		return (): void => {
			window.removeEventListener('scroll', onViewportChange);
			window.removeEventListener('resize', onViewportChange);
		};
	}, [onViewportChange]);

	const contextState = useMemo(() => ({ viewport: viewportRef.current, device }), [device]);

	return <ViewportContext.Provider value={contextState}>{children}</ViewportContext.Provider>;
};
