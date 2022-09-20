/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                main: 'var(--main)',
                wihte: 'var(--white)',
                red: 'var(--red)',
                grey: 'var(--grey)',
                yellow: 'var(--yellow)',
                green: 'var(--green)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}