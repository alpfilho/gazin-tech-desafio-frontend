module.exports = {
	stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-dark-mode',
		'storybook-addon-next'
	],
	framework: '@storybook/react',
	reactOptions: {
		fastRefresh: true
	},
	core: {
		builder: 'webpack5'
	}
};
