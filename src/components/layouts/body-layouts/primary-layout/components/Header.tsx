import { StyledAppBar, StyledToolbar } from './Header.styles';

const PrimaryLayoutHeader: React.FC = () => {
  return (
    <StyledAppBar position='fixed'>
      <StyledToolbar></StyledToolbar>
    </StyledAppBar>
  );
};

export default PrimaryLayoutHeader;
