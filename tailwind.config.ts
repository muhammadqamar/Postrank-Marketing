/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
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
      },

      boxShadow: {
        "small-shadow":
          " 0px 1px 1px 0px rgba(0, 0, 0, 0.17), 0px 0px 1px 0px rgba(0, 0, 0, 0.08)",
        "medium-shadow": "0px 0px 0px 1px rgba(0, 0, 0, 0.34)",
      },

      screens: {
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
  plugins: [],
}
