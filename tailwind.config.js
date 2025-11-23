/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'earth-cream': '#F9F7F2',
                'earth-sage': '#8DA399',
                'earth-charcoal': '#2C3E50',
                'earth-sand': '#E6E2DD',
                'earth-terracotta': '#D35400',
                'vibe-green': '#8DA399', // Keeping alias for compatibility during refactor, mapped to sage
            },
            fontFamily: {
                sans: ['Lato', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [
        require('tailwindcss-animate'),
    ],
}
