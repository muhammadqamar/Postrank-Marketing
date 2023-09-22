/** @type {import('tailwindcss').Config} */
const colors = {
  customBlue: "rgba(47, 103, 221, 1)",
  tagBlue: "rgba(39, 76, 155, 1)",
  lightBlue: "rgba(224, 233, 250, 1)",
  commonBlue: "rgba(241, 246, 253, 1)",
  darkBlue: "rgba(189, 207, 244, 1)",
  primaryGray: "rgba(108, 108, 108, 1)",
  secondaryGray: "rgba(144, 144, 144, 1)",
  mediumGray: "rgba(230, 230, 230, 1)",
  textGray: "rgba(70, 70, 70, 1)",
  commonGray: "rgba(213, 213, 213, 1)",
  lightGray: "rgba(248, 248, 248, 1)",
  primaryRed: "rgba(216, 72, 51, 1)",
  secondaryRed: "rgba(171, 59, 42, 1)",
  primary: {
    100: "#EEE6FF",
    200: "#DCCAFF",
    300: "#C9ADFF",
    400: "#A679FF",
    500: "#9864FF",
    600: "#8A4FFF",
    700: "#7232FA",
    800: "#4A1FA5",
    900: "#170A33",
  },
  success: {
    300: "#5EB846",
    400: "#81C784",
    500: "#4CAF50",
    600: "#388E3C",
  },
  black: "#000",
  white: "#fff",
  error: {
    300: "#AB3B2A",
    400: "#E57373",
    500: "#F44336",
    600: "#D32F2F",
  },
  spBlack: "#232323",

  orange: {
    300: "E68C31",
  },
  blue: {
    100: "#E0E9FA",
    200: "#f1f6fd",
    300: "#BDCFF4",
    500: "#2F67DD",
    600: "#3F83F8",
    700: "#274C9B",
    800: "#0f56B3",
  },
  teal: {
    500: "#3ab6A7",
    700: "#0c8577",
    "accent-500": "#24b3b5",
    "accent-700": "#3ec9cb",
  },
  cardBorder: "#cccccc",
  categoryBadge: {
    // based on category slugs
    "html-css": "#f0c79c", // original: #ef8d24
    javascript: "#ffe7d1", // original: #f6b33c
    "design-ux": "#d1ffe4", // original: #3cbc8d
    entrepreneur: "#b5eaf5", // original: #3dbfd9
    web: "#aad4e6", // original: #1c94c6
    php: "#cbcbf7", // original: #666699
    wordpress: "#b6e8fa", // original: #248aaf
    mobile: "#99d6ff", // original: #2c5773
    computing: "#9fb9ed", // original: #334466
  },
  white_200: "#F1F1F1",
  white_300: "#E8E8E8",
  purple_300: "#8B54FF",
  // lightGray: "#F8F8F8",
  gray_300: "#ABABAB",
  gray_400: "#464646",
  // secondaryGray: "#E6E6E6",
  gray_600: "#6C6C6C",
};
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        White: "#FFFFFF",
        Black: "rgba(0, 0, 0, 1)",
        "Grey-500": "rgba(108, 108, 108, 1)",
        "Grey-700": "rgba(70, 70, 70, 1)",
        "Blue-50": "rgba(241, 246, 253, 1)",
        "Blue-100": "rgba(224, 233, 250, 1)",
        "Blue-200": "rgba(189, 207, 244, 1)",
        "Blue-400": "rgba(66, 133, 244, 1)",
        "Blue-500": "rgba(47, 103, 221, 1)",
        "Blue-700": "rgba(39, 76, 155, 1)",

        "Green-500": "rgba(94, 184, 70, 1)",
        "Red-500": "rgba(216, 72, 51, 1)",
        "Orange-500": "rgba(230, 140, 49, 1)",
        "Orange-200": "rgba(245, 209, 173, 1)",
        ...colors,
      },

      boxShadow: {
        "small-shadow":
          " 0px 1px 1px 0px rgba(0, 0, 0, 0.17), 0px 0px 1px 0px rgba(0, 0, 0, 0.08)",
        "medium-shadow": "0px 0px 0px 1px rgba(0, 0, 0, 0.34)",
        lgShadow:
          "0px 3.5060346126556396px 4.507758617401123px 0px rgba(0, 0, 0, 0.04), 0px 28px 36px 0px rgba(0, 0, 0, 0.07)",

        mdShadow:
          "0px 3.5060346126556396px 4.507758617401123px 0px rgba(0, 0, 0, 0.04), 0px 28px 36px 0px rgba(0, 0, 0, 0.07)",
      },

      screens: {
        xsm: "380px",
        sm: "640px",
        // @media (min-width: 640px) { ... }
        md: "768px",
        // @media (min-width: 768px) { ... }
        lg: "1024px",
        // @media (min-width: 1024px) { ... }
        xl: "	1280px",
        // @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // @media (min-width: 1536px) { ... }f
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
