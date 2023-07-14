const colors = {
  gray: {
    1: "var(--gray-1)",
    2: "var(--gray-2)",
    3: "var(--gray-3)",
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
    },
    extend: {
      colors,
    },
  },
  plugins: [],
};
