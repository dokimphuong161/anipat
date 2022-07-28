/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: {
                    900: '#f14437',
                    800: '#ff3500',
                    700: '#FF4917',
                    600: '#ed5b0d',
                    500: '#ed890d',
                    300: '#FFCE9D',
                    200: '#FFF0E1',
                    100: '#fff7fe',
                },
                overlay: 'rgba(0,0,0,.2)',
            },
            screens: {
                sm: '640px',
                // => @media (min-width: 640px) { ... }

                md: '768px',
                // => @media (min-width: 768px) { ... }

                lg: '1024px',
                // => @media (min-width: 1024px) { ... }

                xl: '1140px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            boxShadow: {
                around: '0px 0px 16px 5px #FFF0E1',
            },
            minWidth: {
                10: '10rem',
            },
            spacing: {
                15: '15px',
            },
        },
    },
    variants: {
        margin: ['group-hover'],
        display: ['group-hover'],
        visibility: ['group-hover'],
    },
    plugins: [],
};
