import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],

  theme: {
    extend: {
      colors: {
        fbprimary: '#0d0b22'
      },
      textColor: {
        white: '#ffffff'
      }
    }
  },
  plugins: []
}
export default config
