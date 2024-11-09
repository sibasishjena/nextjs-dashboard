// {
//   "rules": {
//     "no-unused-vars": "off"
//   },
//   "extends": [
//     "next/core-web-vitals",
//     "next/typescript",
//     "prettier"
//   ]
// }
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			"@typescript-eslint/no-unused-vars": "off",
		},
	},
	eslintConfigPrettier,
];

export default eslintConfig;
