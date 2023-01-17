import MuiBox from '@mui/material/Box';
import { css, styled } from '@mui/material/styles';
import { commonSpacingStyles, ICommonSpacingProps, shouldForwardProp } from './common';

interface IFlexLayoutProps extends ICommonSpacingProps {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
}

const FlexLayout = styled(
  MuiBox,
  shouldForwardProp([]),
)<IFlexLayoutProps>(
  ({ theme, gap = 'm', direction = 'row', ...props }) => css`
    display: flex;
    flex-direction: ${direction};
    height: 100%;

    ${commonSpacingStyles({ ...props, gap, theme })};
  `,
);

export default FlexLayout;
