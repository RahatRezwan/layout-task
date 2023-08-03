export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            'site-bg': '#f1f1f1',
            'olive-green': '#5F6C37',
            'light-orange': '#EAA34D',
         },
         fontFamily: {
            'old-standard': ['Old Standard TT', 'serif'],
            abril: ['Abril Fatface', 'cursive'],
            quicksand: ['"Quicksand"', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
