import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';
import config from 'config';

export const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${config.drawerWidth}px)`,
  },
}));

export const StyledToolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: config.headerMobileHeight,
  [theme.breakpoints.up('lg')]: {
    minHeight: config.headerDesktopHeight,
    padding: theme.spacing(0, theme.space.m),
  },
}));
