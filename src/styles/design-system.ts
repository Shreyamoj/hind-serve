
/**
 * HindServe Design System
 * 
 * A comprehensive design system for HindServe - India's premier service marketplace
 * Featuring an Indian-inspired color palette, typography, spacing, and component styles
 */

// Color palette inspired by traditional Indian colors
export const colors = {
  // Primary colors - based on Indian flag and traditional colors
  saffron: {
    50: '#FFF9E5',
    100: '#FFEFC2',
    200: '#FFE28A',
    300: '#FFD452',
    400: '#FFC829',
    500: '#FF9933', // Indian flag saffron
    600: '#E07B22',
    700: '#C25D14',
    800: '#A3430D',
    900: '#853208',
  },
  white: '#FFFFFF', // Pure white
  green: {
    50: '#E6FFE6',
    100: '#C2FFC2',
    200: '#8AFE8A',
    300: '#52FD52',
    400: '#29FC29',
    500: '#138808', // Indian flag green
    600: '#0E6907',
    700: '#0A4B06',
    800: '#072D05',
    900: '#051F04',
  },
  // Secondary colors - from traditional Indian art and textiles
  navy: {
    50: '#E6EEFF',
    100: '#C2D8FF',
    200: '#8AB1FF',
    300: '#5289FF',
    400: '#296CFE',
    500: '#000080', // Deep navy blue - Ashoka Chakra color
    600: '#000670',
    700: '#000460',
    800: '#000250',
    900: '#000140',
  },
  maroon: {
    50: '#FFEAE6',
    100: '#FFCEC2',
    200: '#FF9D8A',
    300: '#FF6B52',
    400: '#FF462A',
    500: '#800000', // Rich maroon - traditional Indian color
    600: '#700000',
    700: '#600000',
    800: '#500000',
    900: '#400000',
  },
  gold: {
    50: '#FFFDE6',
    100: '#FFFAC2',
    200: '#FFF68A',
    300: '#FFF152',
    400: '#FFEC29',
    500: '#FFD700', // Rich gold - festive Indian color
    600: '#E0BB00',
    700: '#C29F00',
    800: '#A38400',
    900: '#856A00',
  },
  turquoise: {
    50: '#E6FFFC',
    100: '#C2FFF8',
    200: '#8AFEF0',
    300: '#52FEE8',
    400: '#29FCDF',
    500: '#30D5C8', // Turquoise - used in Indian jewelry
    600: '#25B3A8',
    700: '#1B9288',
    800: '#127168',
    900: '#0A504A',
  },
  purple: {
    50: '#F3E6FF',
    100: '#E2C2FF',
    200: '#C48AFF',
    300: '#A752FF',
    400: '#8F29FE',
    500: '#9370DB', // Royal purple - significant in Indian culture
    600: '#7A5CBA',
    700: '#624999',
    800: '#4A3778',
    900: '#372957',
  },
  // Neutral colors for text, backgrounds, etc.
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
};

// Typography - inspired by Indian aesthetics but focusing on readability
export const typography = {
  fontFamily: {
    heading: '"Poppins", sans-serif',
    body: '"Hind", sans-serif',
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

// Spacing system based on 8-point grid
export const spacing = {
  '0': '0',
  '0.5': '0.125rem', // 2px
  '1': '0.25rem',    // 4px
  '2': '0.5rem',     // 8px
  '3': '0.75rem',    // 12px
  '4': '1rem',       // 16px
  '5': '1.25rem',    // 20px
  '6': '1.5rem',     // 24px
  '8': '2rem',       // 32px
  '10': '2.5rem',    // 40px
  '12': '3rem',      // 48px
  '16': '4rem',      // 64px
  '20': '5rem',      // 80px
  '24': '6rem',      // 96px
  '32': '8rem',      // 128px
  '40': '10rem',     // 160px
  '48': '12rem',     // 192px
  '56': '14rem',     // 224px
  '64': '16rem',     // 256px
  '72': '18rem',     // 288px
  '80': '20rem',     // 320px
  '96': '24rem',     // 384px
};

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',     // 2px
  default: '0.25rem', // 4px
  md: '0.375rem',     // 6px
  lg: '0.5rem',       // 8px
  xl: '0.75rem',      // 12px
  '2xl': '1rem',      // 16px
  '3xl': '1.5rem',    // 24px
  full: '9999px',     // Full rounded (circle)
};

// Shadows
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  'colored-lg': '0 10px 15px -3px rgba(255, 153, 51, 0.3), 0 4px 6px -2px rgba(255, 153, 51, 0.2)',
  'colored-xl': '0 20px 25px -5px rgba(19, 136, 8, 0.3), 0 10px 10px -5px rgba(19, 136, 8, 0.2)',
};

// Animations
export const animations = {
  transitionProperty: {
    none: 'none',
    all: 'all',
    default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
  },
  transitionTimingFunction: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  transitionDuration: {
    '75': '75ms',
    '100': '100ms',
    '150': '150ms',
    '200': '200ms',
    '300': '300ms',
    '500': '500ms',
    '700': '700ms',
    '1000': '1000ms',
  },
};

// Components
export const components = {
  button: {
    base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    variant: {
      primary: 'bg-saffron-500 text-white hover:bg-saffron-600 active:bg-saffron-700',
      secondary: 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700',
      outline: 'border border-saffron-500 text-saffron-500 hover:bg-saffron-50 active:bg-saffron-100',
      ghost: 'hover:bg-gray-100 active:bg-gray-200',
      link: 'text-saffron-500 underline-offset-4 hover:underline',
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4',
      lg: 'h-12 px-6 text-lg',
    },
  },
  card: {
    base: 'rounded-xl border bg-white overflow-hidden',
    variants: {
      default: 'shadow-sm',
      elevated: 'shadow-md',
      bordered: 'border-2',
    },
    header: 'p-6',
    title: 'text-xl font-semibold',
    description: 'text-gray-500 mt-1',
    content: 'p-6 pt-0',
    footer: 'flex items-center p-6 pt-0',
  },
  input: {
    base: 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  },
  avatar: {
    base: 'relative flex shrink-0 overflow-hidden rounded-full',
    size: {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-14 w-14',
      xl: 'h-20 w-20',
    },
  },
};

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Export the complete design system
const designSystem = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  animations,
  components,
  breakpoints,
};

export default designSystem;
