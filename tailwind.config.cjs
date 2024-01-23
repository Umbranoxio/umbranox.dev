const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px',
         },
      },
      extend: {
         colors: {
            syellow: '#FEDB47',
         },
         fontFamily: {
            sans: ['Geist Mono', ...defaultTheme.fontFamily.sans],
         },
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
         transitionDuration: {
            DEFAULT: '300ms',
         },
      },
   },
   plugins: [],
};
