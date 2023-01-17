import MuiBox from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import Stack from 'components/common/Stack';
import PrimaryLayoutHeader from './components/Header';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import { Outlet } from 'react-router-dom';
import { StyledMain } from './PrimaryLayout.styles';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const PrimaryLayout: React.FC = () => {
  return (
    <Stack direction='row'>
      <MuiDrawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open
      >
        <DrawerHeader>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
      </MuiDrawer>
      <MuiBox sx={{ width: '100%' }}>
        <PrimaryLayoutHeader />
        <StyledMain component='main'>
          <Outlet />
        </StyledMain>
      </MuiBox>
    </Stack>
  );
};

export default PrimaryLayout;
