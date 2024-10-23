import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: '#0f1215',
        white: '#fff',
        purp: '#21202d',
        "purp-dark": '#1e1b27',
        teal: '#9df1f2',
        pink: '#fb91dd',
        "pink-dark": '#f099f9',
        lavender: '#f099f9',
        "lavender-dark": '#c07ac7', // darkened by 20%
        "slate-blue": '#1d4b5a',
        yellow: '#d0b23b',
        "yellow-dark": '#a88e2f', // darkened by 20%
        "yellow-green": '#cfd683',
        "yellow-green-dark": '#a3aa67', // darkened by 20%
      },
      fontFamily: {
        sans: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-raleway)", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        sm: '1rem',
        base: '1.25rem',
        xl: '1.563rem',
        '2xl': '1.953rem',
        '3xl': '2.441rem',
        '4xl': '3.052rem',
        '5xl': '3.815rem',
      }
    },
  },
  plugins: [],
};
export default config;
