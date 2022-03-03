export const makeBackdropPath = (path: string | null, baseUrl: string): string => {
	if (path) {
		const size = 'original';
		return `${baseUrl}${size}${path}`;
	} else {
		return '';
	}
};
