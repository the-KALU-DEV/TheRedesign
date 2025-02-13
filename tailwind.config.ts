import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '2.5rem'
      },
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        body: `var(--red-hat)`,
      },
      colors: {
        primary: "#2AB255",
        secondary: "#575757",
        textBoldBlack: "#555750",
        lightGreen: "#E6F9EC",
        textBoldPrimary: "#1B1D16",
        textTitle: "#323232",
        semiBlack: "#545454",
        veryLightGreen: "#E5F0E8",
        textGray: "#575757",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        cert: `1px 4px 8px 0px #9C9C9C1A,
        6px 14px 15px 0px #9C9C9C17,
        13px 32px 21px 0px #9C9C9C0D;
        `,
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
