/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    spacing: {
      none: '0px',
      tiny: '0.125rem', // 2px
      min: '0.25rem', // 4px
      xsm: '0.5rem', // 8px
      sm: '0.75rem', // 12px
      base: '1rem', // 16px
      md: '1.5rem', // 24px
      lg: '2rem', // 32px
      xl: '3rem', // 48px
      '2xl': '4rem', // 64px
      '3xl': '5rem', // 80px
      '4xl': '6rem', // 96px
      '5xl': '8rem', // 128px
      '6xl': '10rem', // 160px
      '7xl': '12rem', // 192px
      '8xl': '14rem', // 224px
      '9xl': '16rem', // 256px
      '10xl': '18rem' // 288px
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

    colors: {
      transparent: 'transparent', // For transparent areas and overlays.
      black: '#212121', // Main text and dark UI components in dark mode.
      white: '#F5F5F5', // Backgrounds and light UI components in light mode.
      gray: '#9E9E9E', // Disabled elements, secondary text, and borders.
      primary: '#3949AB', // Primary buttons, highlighted text, and active UI elements.
      'primary-light': '#6F74DD', // Hover states for primary elements.
      'primary-dark': '#303F9F', // Active/Clicked states for primary elements.
      secondary: '#00ACC1', // Secondary buttons, less emphasized UI components.
      'secondary-light': '#33C4D4', // Hover states for secondary elements.
      'secondary-dark': '#007C91', // Active/Clicked states for secondary elements.
      accent: '#FFC107', // Eye-catching elements like badges and important icons.
      warning: '#FF5722', // Warning alerts and messages.
      success: '#4CAF50', // Success alerts, confirmation indicators.
      error: '#D32F2F', // Error messages and critical warnings.
      info: '#1976D2', // Informational tooltips, and non-urgent messages.
      'text-light': '#E1E2E1', // Light text against darker backgrounds.
      'text-dark': '#424242' // Dark text against lighter backgrounds.
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
          fontFamily: "'Merriweather', serif",
          lineHeight: '1.3',
          letterSpacing: '-0.01562em',
          fontWeight: '700'
        }
      ],
      h2: [
        '2rem',
        {
          fontFamily: "'Merriweather', serif",
          lineHeight: '1.25',
          letterSpacing: '-0.00833em',
          fontWeight: '700'
        }
      ],
      'h2-mobile': [
        '1.75rem',
        {
          fontFamily: "'Merriweather', serif",
          lineHeight: '1.3',
          letterSpacing: '-0.00833em',
          fontWeight: '700'
        }
      ],
      h3: [
        '1.75rem',
        {
          fontFamily: "'Merriweather', serif",
          lineHeight: '1.3',
          letterSpacing: '0em',
          fontWeight: '700'
        }
      ],
      'h3-mobile': [
        '1.5rem',
        {
          fontFamily: "'Merriweather', serif",
          lineHeight: '1.35',
          letterSpacing: '0em',
          fontWeight: '700'
        }
      ],
      h4: [
        '1.5rem',
        {
          fontFamily: "'Merriweather', serif",
          lineHeight: '1.35',
          letterSpacing: '0.00735em',
          fontWeight: '700'
        }
      ],
      'h4-mobile': [
        '1.25rem',
        {
          fontFamily: "'Merriweather', serif",
          lineHeight: '1.4',
          letterSpacing: '0.00735em',
          fontWeight: '700'
        }
      ],
      h5: [
        '1.25rem',
        {
          fontFamily: "'Merriweather', serif",
          lineHeight: '1.4',
          letterSpacing: '0em',
          fontWeight: '700'
        }
      ],
      'h5-mobile': [
        '1rem',
        {
          fontFamily: "'Merriweather', serif",
          lineHeight: '1.45',
          letterSpacing: '0em',
          fontWeight: '700'
        }
      ],
      h6: [
        '1rem',
        {
          fontFamily: "'Merriweather', serif",
          lineHeight: '1.5',
          letterSpacing: '0.00938em',
          fontWeight: '700'
        }
      ],
      'h6-mobile': [
        '0.875rem',
        {
          fontFamily: "'Merriweather', serif",
          lineHeight: '1.6',
          letterSpacing: '0.00938em',
          fontWeight: '700'
        }
      ],
      body1: [
        '1rem',
        {
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: '1.5',
          letterSpacing: '0.00938em',
          fontWeight: '400'
        }
      ],
      'body1-mobile': [
        '0.875rem',
        {
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: '1.6',
          letterSpacing: '0.00938em',
          fontWeight: '400'
        }
      ],
      body2: [
        '0.875rem',
        {
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: '1.6',
          letterSpacing: '0.01071em',
          fontWeight: '400'
        }
      ],
      'body2-mobile': [
        '0.8125rem',
        {
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: '1.65',
          letterSpacing: '0.01071em',
          fontWeight: '400'
        }
      ],
      body3: [
        '0.8125rem',
        {
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: '1.65',
          letterSpacing: '0.0125em',
          fontWeight: '400'
        }
      ],
      'body3-mobile': [
        '0.75rem',
        {
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: '1.7',
          letterSpacing: '0.0125em',
          fontWeight: '400'
        }
      ],
      body4: [
        '0.75rem',
        {
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: '1.7',
          letterSpacing: '0.01429em',
          fontWeight: '400'
        }
      ],
      'body4-mobile': [
        '0.6875rem',
        {
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: '1.75',
          letterSpacing: '0.01429em',
          fontWeight: '400'
        }
      ],
      body5: [
        '0.6875rem',
        {
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: '1.75',
          letterSpacing: '0.01607em',
          fontWeight: '400'
        }
      ],
      'body5-mobile': [
        '0.625rem',
        {
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: '1.8',
          letterSpacing: '0.01607em',
          fontWeight: '400'
        }
      ],
      body6: [
        '0.625rem',
        {
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: '1.8',
          letterSpacing: '0.01786em',
          fontWeight: '400'
        }
      ],
      'body6-mobile': [
        '0.5625rem',
        {
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: '1.85',
          letterSpacing: '0.01786em',
          fontWeight: '400'
        }
      ]
    },

    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    },

    borderRadius: {
      sm: '0.25rem', // For subtle rounded corners, think small buttons or input fields
      base: '0.5rem', // A middle-ground for rounded corners, could be used on cards or modals
      lg: '1rem', // For more pronounced rounding, useful for bigger UI elements or feature highlights
      full: '9999px', // For creating rounded avatars or other fully rounded elements
      none: 0 // For square corners
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
