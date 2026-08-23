/**
 * webs Design System — Typography Tokens
 * Standard typography scale, font stacks, line heights, and weights
 * Tailored for Kalyani Government Engineering College & West Bengal Academic Portals
 */

export interface TypeScaleItem {
  name: string;
  fontSize: string;
  fontSizePx: number;
  lineHeight: string;
  lineHeightPx: number;
  letterSpacing: string;
  recommendedWeight: string;
  usage: string;
}

export const WEBS_FONT_FAMILIES = {
  heading: "'Outfit', 'Roboto Slab', system-ui, -apple-system, sans-serif",
  body: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', monospace",
  serif: "'Merriweather', Georgia, serif",
  indic: "'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif",
};

export const WEBS_FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

export const WEBS_LETTER_SPACING = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

export const WEBS_LINE_HEIGHTS = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
};

export const WEBS_TYPE_SCALE: Record<string, TypeScaleItem> = {
  '6xl': {
    name: 'Display / Hero',
    fontSize: '3.75rem',
    fontSizePx: 60,
    lineHeight: '1.1',
    lineHeightPx: 66,
    letterSpacing: '-0.03em',
    recommendedWeight: '800 (Extrabold)',
    usage: 'Landing page hero headlines, high-impact banner statements',
  },
  '5xl': {
    name: 'Heading 1 (H1 Large)',
    fontSize: '3rem',
    fontSizePx: 48,
    lineHeight: '1.15',
    lineHeightPx: 55,
    letterSpacing: '-0.025em',
    recommendedWeight: '800 (Extrabold)',
    usage: 'Page main title, portal hero titles',
  },
  '4xl': {
    name: 'Heading 1 (H1 Standard)',
    fontSize: '2.25rem',
    fontSizePx: 36,
    lineHeight: '1.25',
    lineHeightPx: 45,
    letterSpacing: '-0.02em',
    recommendedWeight: '800 (Extrabold)',
    usage: 'Primary section titles, department titles',
  },
  '3xl': {
    name: 'Heading 2 (H2)',
    fontSize: '1.875rem',
    fontSizePx: 30,
    lineHeight: '1.3',
    lineHeightPx: 39,
    letterSpacing: '-0.015em',
    recommendedWeight: '700 (Bold)',
    usage: 'Secondary section headings, major panel headers',
  },
  '2xl': {
    name: 'Heading 3 (H3)',
    fontSize: '1.5rem',
    fontSizePx: 24,
    lineHeight: '1.35',
    lineHeightPx: 32,
    letterSpacing: '-0.01em',
    recommendedWeight: '700 (Bold)',
    usage: 'Card group headers, modal headers, subsection titles',
  },
  'xl': {
    name: 'Heading 4 (H4)',
    fontSize: '1.25rem',
    fontSizePx: 20,
    lineHeight: '1.4',
    lineHeightPx: 28,
    letterSpacing: '0em',
    recommendedWeight: '600 (Semibold)',
    usage: 'Individual card titles, table headers, widget titles',
  },
  'lg': {
    name: 'Lead / Subtitle',
    fontSize: '1.125rem',
    fontSizePx: 18,
    lineHeight: '1.5',
    lineHeightPx: 27,
    letterSpacing: '0em',
    recommendedWeight: '500 (Medium)',
    usage: 'Lead paragraphs, prominent introductory copy, featured text',
  },
  'base': {
    name: 'Body (Default)',
    fontSize: '1rem',
    fontSizePx: 16,
    lineHeight: '1.6',
    lineHeightPx: 25.6,
    letterSpacing: '0em',
    recommendedWeight: '400 (Regular)',
    usage: 'Standard body text, article content, form inputs',
  },
  'sm': {
    name: 'Body Small / UI',
    fontSize: '0.875rem',
    fontSizePx: 14,
    lineHeight: '1.5',
    lineHeightPx: 21,
    letterSpacing: '0.01em',
    recommendedWeight: '500 (Medium)',
    usage: 'Secondary UI text, button labels, table cells, helper text',
  },
  'xs': {
    name: 'Caption / Eyebrow',
    fontSize: '0.75rem',
    fontSizePx: 12,
    lineHeight: '1.4',
    lineHeightPx: 16.8,
    letterSpacing: '0.08em',
    recommendedWeight: '800 (Extrabold)',
    usage: 'Section category eyebrows (uppercase), timestamps, badges, microcopy',
  },
};
