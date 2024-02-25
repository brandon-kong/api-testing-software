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
          DEFAULT: "#21c667",
          '50': '#f0fdf5',
          '100': '#dcfce9',
          '200': '#bbf7d3',
          '300': '#86efb1',
          '400': '#41dd82',
          '500': '#21c667',
          '600': '#16a351',
          '700': '#158043',
          '800': '#166538',
          '900': '#145330',
          '950': '#052e18',
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
