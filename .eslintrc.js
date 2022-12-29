module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
		mocha: true
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	overrides: [],
	parser: 'esprima',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
            jsx: true
        }
	},
	rules: {
		eqeqeq: true,
		indent: ['error', 4],
		curly: 'error',
		quotes: ['error', 'double'],
		semi: 'error'
	},

	settings: {
		'import/parser': 'babel-eslint',
		sharedData: 'Hello',
	},
};
