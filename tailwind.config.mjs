/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      "app-max-width": "900px",
    },
    extend: {
      colors: {
        "app-header-blue": "#32597B",
        "app-text-secondary": "#32597BA3",
        "app-text-tertiary": "#B6B9B9",
        "app-faded-white": "#F8FAFC",
        "app-gradient-white": "#F2F6F9",
        "app-border": "#E9F0F6",
        "app-bg-light-gray": "#E9F0F652",
        "app-gray-outer": "#9CA3AF",
        "app-gray-inner": "#D1D5DB",
        "app-options-blue": "#32597BD6",
        "app-options-border": "#32597B52",
        "app-light-green": "#D6F5E8",
        "app-dark-green": "#58B4B7",
        "app-light-gray": "#00000052",
        "app-info-gray": "#32597B7A",
        "app-amber-50": "#FFFBEB",
        "app-amber-600": "#D97706",
      },
      boxShadow: {
        "app-shadow": "0 17px 40px 4px #7090B01C",
      },
      backgroundImage: {
        "app-bg-gradient":
          "linear-gradient(90deg, rgba(0, 123, 229, 0.08) 0%, rgba(0, 229, 130, 0.08) 100%)",
      },
    },
  },
  plugins: [],
};
