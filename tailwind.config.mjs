/** @type {import('tailwindcss').Config} */
// Los valores viven en src/styles/product.css (tokens del design system ./mich).
// Tailwind solo los nombra: una clase y un var(--token) significan lo mismo.
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				ClashDisplay: ['ClashDisplay', 'Inter Tight Variable', 'sans-serif'],
				InterT: ['Inter Tight Variable', 'sans-serif'],
				sans: ['Inter Tight Variable', 'sans-serif'],
				mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			},
			screens: {
				'xs': '345px',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},
			colors: {
				bg: 'var(--bg)',
				surface: 'var(--surface)',
				'surface-glass': 'var(--surface-glass)',
				ink: 'var(--ink)',
				muted: 'var(--muted)',
				line: 'var(--line)',
				'line-subtle': 'var(--line-subtle)',
				accent: {
					DEFAULT: 'var(--accent)',
					strong: 'var(--accent-strong)',
					deep: 'var(--accent-deep)',
					soft: 'var(--accent-soft)',
				},
				success: 'var(--success)',
			},
			borderRadius: {
				control: 'var(--radius-sm)', // botones, inputs
				card: 'var(--radius-md)',    // tarjetas chicas
				panel: 'var(--radius-lg)',   // proyectos, paneles
			},
			transitionDuration: {
				fast: 'var(--dur-fast)',
				base: 'var(--dur-base)',
				slow: 'var(--dur-slow)',
				reveal: 'var(--dur-reveal)',
			},
			transitionTimingFunction: {
				out: 'var(--ease-out)',
			},
		},
	},
	plugins: [],
}
