import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                brandColor: "#0B7077",
                brandColor2: "#FD661F",
                brandSecondary: "#D2E6E4"
            },
            boxShadow: {
                brandShadow: "3px 3px 10px #232323, -3px -3px 10px #ddd"
            }
        },
    },
    plugins: [],
} satisfies Config;
