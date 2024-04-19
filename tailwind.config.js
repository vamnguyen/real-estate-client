/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dancing: ["Dancing Script"],
      },
      backgroundColor: {
        primary: {
          50: "#EDEFF6",
          100: "#DBDFEC",
          200: "#B7BFD9",
          300: "#92A0C7",
          400: "#6E80B4",
          500: "#4A60A1",
          600: "#3B4D81",
          700: "#2C3A61",
          800: "#1E2640",
          900: "#0F1320",
        },
        overlay: "rgba(0, 0, 0, 0.35)",
      },
      colors: {
        primary: {
          50: "#EDEFF6",
          100: "#DBDFEC",
          200: "#B7BFD9",
          300: "#92A0C7",
          400: "#6E80B4",
          500: "#4A60A1",
          600: "#3B4D81",
          700: "#2C3A61",
          800: "#1E2640",
          900: "#0F1320",
        },
        gray: {
          50: "#E7E9EB",
          100: "#CFD3D6",
          200: "#B8BCC2",
          300: "#A0A6AD",
          400: "#889099",
          500: "#6D737A",
          600: "#52565C",
          700: "#363A3D",
          black: "1B1D1F",
        },
      },
      width: {
        main: "1320px",
      },
    },
  },
  plugins: [],
};
