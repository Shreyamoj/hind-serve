
/**
 * HindServe 8-point Spacing System
 * 
 * This file documents the spacing system used throughout the application.
 * We follow an 8-point grid system with some exceptions for finer adjustments.
 * 
 * Tailwind mapping:
 * - 0: 0px
 * - 0.5: 2px (quarter spacing - use sparingly)
 * - 1: 4px (half spacing - use sparingly)
 * - 2: 8px (base unit)
 * - 3: 12px (1.5x base)
 * - 4: 16px (2x base)
 * - 5: 20px (2.5x base)
 * - 6: 24px (3x base)
 * - 8: 32px (4x base)
 * - 10: 40px (5x base)
 * - 12: 48px (6x base)
 * - 16: 64px (8x base)
 * - 20: 80px (10x base)
 * - 24: 96px (12x base)
 */

export const SPACING = {
  none: 0,    // 0px
  quarter: 2, // 2px (px-0.5, py-0.5, m-0.5)
  half: 4,    // 4px (px-1, py-1, m-1)
  base: 8,    // 8px (px-2, py-2, m-2)
  x1_5: 12,   // 12px (px-3, py-3, m-3)
  x2: 16,     // 16px (px-4, py-4, m-4)
  x2_5: 20,   // 20px (px-5, py-5, m-5)
  x3: 24,     // 24px (px-6, py-6, m-6)
  x4: 32,     // 32px (px-8, py-8, m-8)
  x5: 40,     // 40px (px-10, py-10, m-10)
  x6: 48,     // 48px (px-12, py-12, m-12)
  x8: 64,     // 64px (px-16, py-16, m-16)
  x10: 80,    // 80px (px-20, py-20, m-20)
  x12: 96,    // 96px (px-24, py-24, m-24)
};

export const GAPS = {
  none: 'gap-0',          // 0px
  xs: 'gap-2',            // 8px
  sm: 'gap-3',            // 12px
  md: 'gap-4 md:gap-6',   // 16px on mobile, 24px on larger screens
  lg: 'gap-6 md:gap-8',   // 24px on mobile, 32px on larger screens
  xl: 'gap-8 md:gap-10',  // 32px on mobile, 40px on larger screens
};

export const CONTAINER_PADDING = {
  mobile: 'px-4',        // 16px
  tablet: 'sm:px-6',     // 24px
  desktop: 'lg:px-8',    // 32px
};

export const SECTION_PADDING = {
  default: 'py-12 md:py-16 lg:py-20', // 48px mobile, 64px tablet, 80px desktop
  small: 'py-8 md:py-12',             // 32px mobile, 48px tablet
  large: 'py-16 md:py-24 lg:py-32',   // 64px mobile, 96px tablet, 128px desktop
};

export const CARD_PADDING = {
  default: 'p-4 md:p-6',  // 16px mobile, 24px desktop
  small: 'p-3 md:p-4',    // 12px mobile, 16px desktop
  large: 'p-6 md:p-8',    // 24px mobile, 32px desktop
};

export const GRID_COLUMNS = {
  mobile: 'grid-cols-1',       // 1 column
  tablet: 'sm:grid-cols-2',    // 2 columns
  desktop: 'lg:grid-cols-3',   // 3 columns
  widescreen: 'xl:grid-cols-4' // 4 columns
};
