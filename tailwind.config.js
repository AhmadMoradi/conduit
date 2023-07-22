const colors = {
  black: {
    1: "var(--black-1)",
    2: "var(--black-2)",
  },
  gray: {
    0: "var(--gray-0)",
    1: "var(--gray-1)",
    2: "var(--gray-2)",
    3: "var(--gray-3)",
    4: "var(--gray-4)",
    5: "var(--gray-5)",
    6: "var(--gray-6)",
    7: "var(--gray-7)",
    10: "var(--gray-10)",
  },
  green: {
    1: "var(--green-1)",
  },
  red: {
    1: "var(--red-1)",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./features/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xlg: "1140px",
      },
    },
    extend: {
      colors,
    },
  },
  plugins: [],
};
