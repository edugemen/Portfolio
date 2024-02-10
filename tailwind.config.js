/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            backgroundImage: {
                curve: "url('/back.svg')",
            },
            fontFamily: {
                sans: ["inter", "sans-serif"],
            },
            colors: {
                deep: "#13151A",
            },
            animation: {
                carrousel: "move-left 30s linear infinite",
            },
            keyframes: {
                "move-left": {
                    "0%": { transform: "translateX(0)" },
                    "100%": {
                        // transform: "translateX(calc(var(--animation-width)))",
                        transform: "translateX(-3000px)",
                    },
                },
            },
        },
    },
    plugins: [],
};
