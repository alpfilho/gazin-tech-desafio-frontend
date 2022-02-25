module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended',
		'plugin:storybook/recommended',
		'prettier'
	]
};
