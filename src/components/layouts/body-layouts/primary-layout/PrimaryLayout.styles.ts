import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import config from 'config';

export const StyledMain = styled(MuiBox)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  minHeight: '100vh',
  padding: theme.spacing(0, theme.space.m, theme.space.m),
  paddingTop: `calc(${config.headerMobileHeight}px + ${theme.space.xs})`,
  width: '100%',

  [theme.breakpoints.up('lg')]: {
    paddingTop: `calc(${config.headerDesktopHeight}px + ${theme.space.m})`,
  },
}));
