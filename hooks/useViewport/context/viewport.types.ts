export type DeviceType = 'smartphone' | 'tablet' | 'desktop';

export type ViewportT = {
	scrollY?: number;
	height?: number;
	width?: number;
};

export interface ViewportContextStateI {
	viewport?: ViewportT;
	device: DeviceType;
}
