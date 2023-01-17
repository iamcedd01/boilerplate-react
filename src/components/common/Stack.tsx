import MuiStack, { StackProps } from '@mui/material/Stack';

export type IStackProps = StackProps;

const Stack: React.FC<IStackProps> = (props) => <MuiStack {...props} />;

export default Stack;
