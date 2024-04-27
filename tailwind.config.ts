import type { Config } from 'tailwindcss';
import { addVariablesForColors, dottedAndGridBackground } from './src/themes/plugins/plugin.aceternity';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [addVariablesForColors, dottedAndGridBackground],
} satisfies Config;
