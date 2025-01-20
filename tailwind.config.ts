import type { Config } from "tailwindcss";
import catppuccin from '@catppuccin/daisyui'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    // The top value of this array will be used as the default theme
    // You can use https://github.com/saadeghi/theme-change to switch between themes
    themes: [
      // You can simply select a catppuccin flavor with sane default colors
      // Values not explicitly defined will use default values
      catppuccin('mocha', { primary: 'blue', secondary: 'mantle', accent: 'mauve' }),
      // Fallback to default theme
      'light',
    ],
  },
} satisfies Config;


