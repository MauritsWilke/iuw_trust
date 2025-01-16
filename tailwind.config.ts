import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}', './src/components/**/*.{svelte}'],

    theme: {
        extend: {
            colors: {
                "primary": "#FABA02",
                "teal": "#003742",
                "off-white": "#fff6e3",
            },
            fontFamily: {
                serif: ["Inter", "serif"]
            },
        }
    },

    plugins: []
} satisfies Config;
