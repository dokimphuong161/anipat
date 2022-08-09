/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
                poppins: ['Quicksand', 'sans-serif'],
            },
            colors: {
                primary: {
                    900: '#f14437',
                    800: '#ff3500',
                    700: '#FF4917',
                    600: '#ff642f',
                    500: '#ed5b0d',
                    400: '#ed890d',
                    300: '#FFCE9D',
                    200: '#FFF0E1',
                    100: '#fff7fe',
                },
                green: {
                    200: ':#7ac143',
                },
                overlay: {
                    200: 'rgba(0,0,0,.2)',
                    400: 'rgba(0,0,0,.4)',
                    500: 'rgba(0,0,0,.5)',
                },
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
                around: '0px 0px 30px 5px #FFF0E1',
                large: '-1px 0px 42px 0px rgb(40 35 68 / 14%)',
            },
            minWidth: {
                10: '10rem',
            },
            spacing: {
                15: '15px',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-6deg)' },
                    '50%': { transform: 'rotate(6deg)' },
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                fadeOut: {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
            },
            animation: {
                wiggle: 'wiggle 2s ease-in-out infinite',
                fadeIn: 'fadeIn .5s forwards',
                fadeOut: 'fadeOut .5s forwards',
                'ping-slow': 'ping 1s linear infinite',
            },
            borderRadius: {
                drag: '68% 32% 27% 73% / 60% 62% 38% 40%',
                shape: '47% 53% 61% 39% / 38% 38% 62% 62%',
            },
            transitionTimingFunction: {
                'fade-up': 'cubic-bezier(0,1,0,1)',
                'fade-down': 'cubic-bezier(1,0,1,0)',
            },
            backgroundImage: {
                wave: "url('assets/images/shape/shape_wave.webp')",
                cloud: "url('assets/images/shape/shape_cloud.webp')",
                line: "url('assets/images/shape/shape_line.webp')",
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
