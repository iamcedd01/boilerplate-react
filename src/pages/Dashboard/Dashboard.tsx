import MuiGrid from '@mui/material/Grid';
import Text from 'components/common/Text';

const Dashboard: React.FC = () => {
  return (
    <MuiGrid container spacing={3}>
      <MuiGrid item xs={12}>
        <Text text='Welcome back, Cedd' variant='h3' weight='bold' />
      </MuiGrid>
    </MuiGrid>
  );
};

export default Dashboard;
