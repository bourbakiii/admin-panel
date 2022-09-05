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
                primary: 'var(--primary)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}