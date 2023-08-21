module.exports = {
	root: true,
	env: { browser: true, es2021: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "react", "@typescript-eslint", "react-hooks"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"react/react-in-jsx-scope": "off",
		"prettier/prettier": [
			"warn",
			{ endOfLine: "auto", useTabs: true },
			{ usePrettierrc: true },
		],
		"no-restricted-imports": "off",
		"@typescript-eslint/no-restricted-imports": [
			"warn",
			{
				name: "react-redux",
				importNames: ["useSelector", "useDispatch"],
				message:
					"Use typed hooks `useAppDispatch` and `useAppSelector` instead.",
			},
		],
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "warn",
	},
};
