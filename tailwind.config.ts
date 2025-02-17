// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;

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
        DEFAULT: '1rem',
        sm: '1.2rem',
        lg: '1.7rem',
        xl: '2.2rem',
        '2xl': '2.7rem',
        '3xl': '3rem'
      },
      screens: {
        '2xl': '1500px',
        '3xl': '2040px'
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
        bgFAQ: "#F6FAFF"
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      // boxShadow: {
      //   cert: `1px 4px 8px 0px #9C9C9C1A,
      //   6px 14px 15px 0px #9C9C9C17,
      //   13px 32px 21px 0px #9C9C9C0D;
      //   `,
      // },
      rotate: {
        "y-180": "180deg",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

