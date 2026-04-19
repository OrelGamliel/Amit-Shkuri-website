export const theme = {
  colors: {
    primary: '#6B4C3B',
    secondary: '#C8A882',
    accent: '#8B9E7E',
    bg: '#FAF6F1',
    bgAlt: '#F2EBE3',
    text: '#2C2C2C',
    textMuted: '#7A7A7A',
    white: '#FFFFFF',
  },
  fonts: {
    body: "'Heebo', sans-serif",
    heading: "'Heebo', sans-serif",
  },
  fontSizes: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '5rem',
    '3xl': '8rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  radii: {
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.08)',
    md: '0 4px 16px rgba(0,0,0,0.10)',
    lg: '0 8px 32px rgba(0,0,0,0.12)',
  },
} as const;

export type Theme = typeof theme;
