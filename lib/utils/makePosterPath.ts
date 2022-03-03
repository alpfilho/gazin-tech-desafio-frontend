export const makePosterPath = (path: string | null, baseUrl: string): string => {
	if (path) {
		const size = 'w500';
		return `${baseUrl}${size}${path}`;
	} else {
		return '';
	}
};
