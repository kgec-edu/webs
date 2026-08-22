export interface ThemeTokens {
  primary: string;
  primaryDeep: string;
  primarySoft: string;
  secondary: string;
  accent: string;
  accentHover: string;
  accentLight: string;
  background: string;
  surface: string;
  textMain: string;
  textMuted: string;
  border: string;
}

export type ThemeName = 'theme-1' | 'theme-2' | 'theme-3' | 'theme-4' | 'theme-5';

export interface ThemePreset {
  id: ThemeName;
  name: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  tokens: ThemeTokens;
}

export const WEBS_THEMES: Record<ThemeName, ThemePreset> = {
  'theme-1': {
    id: 'theme-1',
    name: 'Theme 1 (Default)',
    description: 'IIT Guwahati Signature Slate Navy & Warm Tangerine Gold',
    primaryColor: '#212331',
    accentColor: '#FC9928',
    tokens: {
      primary: '#212331',
      primaryDeep: '#181924',
      primarySoft: '#2D3042',
      secondary: '#881337',
      accent: '#FC9928',
      accentHover: '#E68212',
      accentLight: '#FFF3E0',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      textMain: '#1E293B',
      textMuted: '#5E6B7A',
      border: '#DDE3EA',
    },
  },
  'theme-2': {
    id: 'theme-2',
    name: 'Theme 2',
    description: 'Lush Forest Emerald & Warm Gold',
    primaryColor: '#064E3B',
    accentColor: '#F59E0B',
    tokens: {
      primary: '#064E3B',
      primaryDeep: '#022C22',
      primarySoft: '#047857',
      secondary: '#1E3A8A',
      accent: '#F59E0B',
      accentHover: '#D97706',
      accentLight: '#FEF3C7',
      background: '#F0FDF4',
      surface: '#FFFFFF',
      textMain: '#1E293B',
      textMuted: '#64748B',
      border: '#CBD5E1',
    },
  },
  'theme-3': {
    id: 'theme-3',
    name: 'Theme 3',
    description: 'Oxford Royal Blue & Solar Gold',
    primaryColor: '#1E3A8A',
    accentColor: '#EAB308',
    tokens: {
      primary: '#1E3A8A',
      primaryDeep: '#172554',
      primarySoft: '#2563EB',
      secondary: '#991B1B',
      accent: '#EAB308',
      accentHover: '#CA8A04',
      accentLight: '#FEF9C3',
      background: '#F8FAFC',
      surface: '#FFFFFF',
      textMain: '#0F172A',
      textMuted: '#475569',
      border: '#E2E8F0',
    },
  },
  'theme-4': {
    id: 'theme-4',
    name: 'Theme 4',
    description: 'Heritage Crimson & Amber Gold',
    primaryColor: '#881337',
    accentColor: '#F59E0B',
    tokens: {
      primary: '#881337',
      primaryDeep: '#4C0519',
      primarySoft: '#9F1239',
      secondary: '#212331',
      accent: '#F59E0B',
      accentHover: '#D97706',
      accentLight: '#FEF3C7',
      background: '#FFFBEB',
      surface: '#FFFFFF',
      textMain: '#1C1917',
      textMuted: '#78716C',
      border: '#E7E5E4',
    },
  },
  'theme-5': {
    id: 'theme-5',
    name: 'Theme 5',
    description: 'Midnight Slate Minimal',
    primaryColor: '#0F172A',
    accentColor: '#EAB308',
    tokens: {
      primary: '#0F172A',
      primaryDeep: '#020617',
      primarySoft: '#1E293B',
      secondary: '#0369A1',
      accent: '#EAB308',
      accentHover: '#CA8A04',
      accentLight: '#FEF9C3',
      background: '#F8FAFC',
      surface: '#FFFFFF',
      textMain: '#0F172A',
      textMuted: '#64748B',
      border: '#CBD5E1',
    },
  },
};
