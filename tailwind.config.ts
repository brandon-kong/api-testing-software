import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-sans)'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6a9f43",
          '50': '#f3f8ed',
          '100': '#e3f0d7',
          '200': '#c9e2b4',
          '300': '#a7cf87',
          '400': '#7db453',
          '500': '#6a9f43',
          '600': '#517e32',
          '700': '#3f612a',
          '800': '#354e26',
          '900': '#2f4324',
          '950': '#16240f',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      height: {
        'navbar-height': 'var(--navbar-height)',
      },
      width: {
        'content-width': 'var(--content-width)',
      },
      maxWidth: {
        'content-width': 'var(--content-width)',
      },
    },
  },
  plugins: [],
};

export default config;
