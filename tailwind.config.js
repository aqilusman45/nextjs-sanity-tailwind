/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      'lg-xl': '1280px',
      xl: '1440px',
    },
    extend: {
      transitionDuration: {
        400: '0.4s',
      },
      fontFamily: {
        Inter: ["'Inter', sans-serif"],
        'aeronik-pro': ["'Aeonik-Pro', sans-serif"],
        'aeronik-pro-vf': ["'Aeonik-Pro-VF', sans-serif"],
        'aeronik-pro-air': ["'Aeonik-Pro-Air', sans-serif"],
        roboto: ["'Roboto', sans-serif"],
      },
      fontSize: {
        '12-more': ['0.75rem', '1.2rem'], //[12px,19.2px]
        '12-less': ['0.75rem', '1.05rem'], //[12px,16.8px]
        'xl:14': ['0.875rem', '1.225rem'], // [14px,19.6px]
        'lg:14': ['0.875rem', '1.4rem'], //[ 14px, 22.4px]
        16: ['1rem', '1.4rem'], //[ 16px, 22.4px]
        '16-more': ['1rem', '1.6rem'], //[ 16px, 25.6px]
        18: ['1.125rem', '1.8rem'], //[18px,28.8px]
        20: ['1.25rem', '2rem'], //[20px,32px]
        22: ['1.375rem', '2.2rem'], //[22px,35.2px]
        24: ['1.5rem', '2.4rem'], //[24px,38.4px]
        28: ['1.75rem', '2.45rem'], // [28px,39.2px ]
        '32-less': ['2rem', '2.4rem'], //[32px,38.4px]
        '32-more': ['2rem', '2.8rem'], //[32px,44.8px]
      },
      colors: {
        footer: '#ffffff80',
        green: {
          DEFAULT: '#43980B',
          100: '#ECFDE1',
          200: '#C7F8A6',
          300: '#ABF57A',
          400: '#65E411',
          500: '#43980B',
        },
        gray: {
          DEFAULT: '#506071',
          100: '#506071',
        },
        teal: {
          DEFAULT: '#1B7470',
          100: '#DDF7F6',
          200: '#9AE7E4',
          300: '#67DBD6',
          400: '#29AEA8',
          500: '#1B7470',
        },
        blue: {
          DEFAULT: '#001831',
          100: '#D1E7FC',
          200: '#79A8F7',
          300: '#216EF2',
          400: '#0B4CBB',
          500: '#113161',
          550: '#005ECC',
          600: '#001831',
        },
        purple: {
          DEFAULT: '#411797',
          100: '#E2D7F9',
          200: '#A886ED',
          300: '#7C49E4',
          400: '#561EC9',
          500: '#411797',
        },
        error: {
          DEFAULT: '#FF2101',
          300: '#FF2101',
        },
        neutral: {
          DEFAULT: '#252729',
          0: '#FFFFFF',
          100: '#F5F5F5',
          200: '#EBEEF0',
          300: '#C8CCD0',
          400: '#737980',
          500: '#45484D',
          600: '#252729',
        },
      },
      maxWidth: {
        default: '96rem',
        1320: '82.5rem',
        800: '50rem',
        760: '47.5rem',
        720: '45rem',
        450: '450px',
        458: '458px',
        648: '40.5rem',
      },
      minWidth: {
        default: '96rem',
        1320: '82.5rem',
        800: '50rem',
        720: '45rem',
      },
      spacing: {
        120: '7.5rem',
        108: '6.75rem',
        92: '5.75rem',
        710: '44.375rem',
        88: '5.5rem',
        30: '7.5rem',
        104: '6.5rem',
        152: '9.5rem',
        282: '17.625rem',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.header-1': {
          fontSize: '2.5rem',
          lineHeight: '2.5rem',
          '@media screen(md)': {
            fontSize: '3.375rem',
            lineHeight: '4.05rem',
          },
          '@media screen(lg)': {
            fontSize: '4.032rem',
            lineHeight: '4.838rem',
          },
          '@media screen(xl)': {
            fontSize: '4rem',
            lineHeight: '4rem',
          },
        },
        '.header-2': {
          fontSize: '2rem',
          lineHeight: '2.2rem',
          '@media screen(md)': {
            fontSize: '2.75rem',
            lineHeight: '3.3rem',
          },
          '@media screen(lg)': {
            fontSize: '3.25rem',
            lineHeight: '3.9rem',
          },
          '@media screen(xl)': {
            fontSize: '3rem',
            lineHeight: '3.6rem',
          },
        },
        '.header-3': {
          fontSize: '1.5rem',
          lineHeight: '1.65rem',
          '@media screen(md)': {
            fontSize: '2.125rem',
            lineHeight: '2.55rem',
          },
          '@media screen(lg)': {
            fontSize: '2.5rem',
            lineHeight: '3rem',
          },
          '@media screen(xl)': {
            fontSize: '2rem',
            lineHeight: '2.4rem',
          },
        },
        '.header-4': {
          fontSize: '1.25rem',
          lineHeight: '1.5rem',
          '@media screen(md)': {
            fontSize: '1.625rem',
            lineHeight: '1.95rem',
          },
          '@media screen(lg)': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
          },
          '@media screen(xl)': {
            fontSize: '1.5rem',
            lineHeight: '1.95rem',
          },
        },
        '.header-5': {
          fontSize: '1.125rem',
          lineHeight: '1.575rem',
          '@media screen(md)': {
            fontSize: '1.375rem',
            lineHeight: '1.65rem',
          },
          '@media screen(lg)': {
            fontSize: '1.5rem',
            lineHeight: '1.8rem',
          },
          '@media screen(xl)': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
          },
        },
        '.header-6': {
          fontSize: '0.75rem',
          lineHeight: '1.05rem',
          '@media screen(md)': {
            fontSize: '1.125rem',
            lineHeight: '1.35rem',
          },
          '@media screen(lg)': {
            fontSize: '1.125rem',
            lineHeight: '1.35rem',
          },
          '@media screen(xl)': {
            fontSize: '0.75rem',
            lineHeight: '1.05rem',
          },
        },
      })
    },
  ],
}
