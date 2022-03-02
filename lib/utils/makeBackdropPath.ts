import { ApiConfiguration } from 'lib/types';

export const makeBackdropPath = (path: string | null, apiConfig: ApiConfiguration): string => {
	if (path) {
		const basePath = apiConfig.images.base_url;
		const size = 'original';
		return `${basePath}${size}${path}`;
	} else {
		return '';
	}
};
