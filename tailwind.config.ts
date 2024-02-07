import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      screens: {
        mobile: '320px',
        // => @media (min-width: 320px) { ... }

        lgMobile: '480px',
        // => @media (min-width: 480px) { ... }

        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        lgTablet: '768px',
        // => @media (min-width: 768px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }

        lgDesktop: '1440px'
        // => @media (min-width: 1440px) { ... }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      fontSize: {
        h1: [
          '2.5rem',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.01562em',
            fontWeight: '700'
          }
        ],
        'h1-mobile': [
          '2rem',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.01562em',
            fontWeight: '700'
          }
        ],
        h2: [
          '2rem',
          {
            lineHeight: '1.25',
            letterSpacing: '-0.00833em',
            fontWeight: '700'
          }
        ],
        'h2-mobile': [
          '1.75rem',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.00833em',
            fontWeight: '700'
          }
        ],
        h3: [
          '1.75rem',
          {
            lineHeight: '1.3',
            letterSpacing: '0em',
            fontWeight: '700'
          }
        ],
        'h3-mobile': [
          '1.5rem',
          {
            lineHeight: '1.35',
            letterSpacing: '0em',
            fontWeight: '700'
          }
        ],
        h4: [
          '1.5rem',
          {
            lineHeight: '1.35',
            letterSpacing: '0.00735em',
            fontWeight: '700'
          }
        ],
        'h4-mobile': [
          '1.25rem',
          {
            lineHeight: '1.4',
            letterSpacing: '0.00735em',
            fontWeight: '700'
          }
        ],
        h5: [
          '1.25rem',
          {
            lineHeight: '1.4',
            letterSpacing: '0em',
            fontWeight: '700'
          }
        ],
        'h5-mobile': [
          '1rem',
          {
            lineHeight: '1.45',
            letterSpacing: '0em',
            fontWeight: '700'
          }
        ],
        h6: [
          '1rem',
          {
            lineHeight: '1.5',
            letterSpacing: '0.00938em',
            fontWeight: '700'
          }
        ],
        'h6-mobile': [
          '0.875rem',
          {
            lineHeight: '1.6',
            letterSpacing: '0.00938em',
            fontWeight: '700'
          }
        ],
        body1: [
          '1rem',
          {
            lineHeight: '1.5',
            letterSpacing: '0.00938em',
            fontWeight: '400'
          }
        ],
        'body1-mobile': [
          '0.875rem',
          {
            lineHeight: '1.6',
            letterSpacing: '0.00938em',
            fontWeight: '400'
          }
        ],
        body2: [
          '0.875rem',
          {
            lineHeight: '1.6',
            letterSpacing: '0.01071em',
            fontWeight: '400'
          }
        ],
        'body2-mobile': [
          '0.8125rem',
          {
            lineHeight: '1.65',
            letterSpacing: '0.01071em',
            fontWeight: '400'
          }
        ],
        body3: [
          '0.8125rem',
          {
            lineHeight: '1.65',
            letterSpacing: '0.0125em',
            fontWeight: '400'
          }
        ],
        'body3-mobile': [
          '0.75rem',
          {
            lineHeight: '1.7',
            letterSpacing: '0.0125em',
            fontWeight: '400'
          }
        ],
        body4: [
          '0.75rem',
          {
            lineHeight: '1.7',
            letterSpacing: '0.01429em',
            fontWeight: '400'
          }
        ],
        'body4-mobile': [
          '0.6875rem',
          {
            lineHeight: '1.75',
            letterSpacing: '0.01429em',
            fontWeight: '400'
          }
        ],
        body5: [
          '0.6875rem',
          {
            lineHeight: '1.75',
            letterSpacing: '0.01607em',
            fontWeight: '400'
          }
        ],
        'body5-mobile': [
          '0.625rem',
          {
            lineHeight: '1.8',
            letterSpacing: '0.01607em',
            fontWeight: '400'
          }
        ],
        body6: [
          '0.625rem',
          {
            lineHeight: '1.8',
            letterSpacing: '0.01786em',
            fontWeight: '400'
          }
        ],
        'body6-mobile': [
          '0.5625rem',
          {
            lineHeight: '1.85',
            letterSpacing: '0.01786em',
            fontWeight: '400'
          }
        ]
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
