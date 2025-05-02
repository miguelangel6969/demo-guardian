import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f8e6e9',
      100: '#f1cdd4',
      200: '#e9aaba',
      300: '#de7d95',
      400: '#d6577a',
      500: '#932f46',
      600: '#b32855',
      700: '#932f46',
      800: '#7a243a',
      900: '#631e30',
      950: '#3c0f1c'
    },
    surface: {
      0: '#ffffff',
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    },
    text: {
      base: '{surface.700}',
      hover: '{surface.800}',
      muted: '{surface.500}',
      hoverMuted: '{surface.600}'
    },
    content: {
      background: '{surface.0}',
      hoverBackground: '{surface.100}',
      borderColor: '{surface.200}',
      color: '{text.base}',
      hoverColor: '{text.hover}'
    },
    highlight: {
      background: '{primary.50}',
      focusBackground: '{primary.100}',
      color: '{primary.700}',
      focusColor: '{primary.800}'
    },
    border: {
      radius: {
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px'
      }
    }
  },
  dark: {
    primary: {
      50: '#f8e6e9',
      100: '#f1cdd4',
      200: '#e9aaba',
      300: '#de7d95',
      400: '#d6577a',
      500: '#962d46',
      600: '#b32855',
      700: '#962d46',
      800: '#7a243a',
      900: '#631e30',
      950: '#3c0f1c'
    },
    surface: {
      0: '#0f0f0f',
      100: '#1c1c1c',
      200: '#2a2a2a',
      300: '#383838',
      400: '#444',
      500: '#555',
      600: '#666',
      700: '#777',
      800: '#888',
      900: '#999',
      950: '#aaaaaa'
    },
    text: {
      base: '#f1f1f1',
      hover: '#ffffff',
      muted: '#cccccc',
      hoverMuted: '#dddddd'
    },
    content: {
      background: '{surface.0}',
      hoverBackground: '{surface.100}',
      borderColor: '{surface.300}',
      color: '{text.base}',
      hoverColor: '{text.hover}'
    },
    highlight: {
      background: '{primary.100}',
      focusBackground: '{primary.200}',
      color: '{primary.700}',
      focusColor: '{primary.800}'
    }
  },
  options: {
    darkModeSelector: '.app-dark'
  }
});

export default MyPreset;
