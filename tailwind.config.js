import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}', 'node_modules/flowbite/**/*.{js,jsx,ts,tsx,vue}',],
  theme: {
    extend: {
      colors: {
        primary: '#3A3A3A',
        success: '#2CC907',
        info: '#00b0ff',
        warning: '#FFAE00',
        danger: '#DA2834'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
} satisfies Config
