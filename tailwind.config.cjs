/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				appear: {
					'0%': {opacity: 0},
					'100%': {opacity: 1}
				},
			},
			animation: {
				appear: 'appear 1s ease-in-out'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	]
};

