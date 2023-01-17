import createTheme from '@mui/material/styles/createTheme';
import overridesConfig from './overrides';
import paletteConfig from './palette';
import typographyOptions from './typography';

const theme = createTheme({
  ...overridesConfig,
  ...paletteConfig,
  typography: typographyOptions,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  space: {
    xxs: '4px',
    xs: '8px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '40px',
  },
});

export default theme;

export type ThemeType = typeof theme;
