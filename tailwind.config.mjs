/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        '3xs':        '0.5625rem',    // 9px
        '2xs':        '0.625rem',     // 10px
        'xxs':        '0.6875rem',    // 11px
        // xs        = 0.75rem        // 12px  (built-in)
        'mid':        '0.8125rem',    // 13px
        // sm        = 0.875rem       // 14px  (built-in)
        'md':         '0.9375rem',    // 15px
        // base      = 1rem           // 16px  (built-in)
        'prose':      '1.0625rem',    // 17px
        // lg        = 1.125rem       // 18px  (built-in)
        'display-xs': '1.75rem',      // 28px
        'display':    '5rem',         // 80px
        'display-lg': '5.625rem',     // 90px
      },
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1a1a1a',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.2em',
      },
    },
  },
  plugins: [],
};
