export const makeProfilePath = (path: string | null, baseUrl: string): string => {
	if (path) {
		const size = 'h632';
		return `${baseUrl}${size}${path}`;
	} else {
		return '';
	}
};
