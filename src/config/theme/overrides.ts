import { ThemeOptions } from '@mui/material';

const overridesConfig: ThemeOptions = {
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow:
            '0 8px 10px 1px rgba(68,68,66,0.04), 0 3px 14px 2px rgba(68,68,66,0.08), 0 5px 5px -3px rgba(68,68,66,0.01)',
          padding: '16px',
        },
      },
    },
  },
};

export default overridesConfig;
