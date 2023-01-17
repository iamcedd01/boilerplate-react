import { styled } from '@mui/material/styles';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';

interface ITextProps extends TypographyProps {
  text?: string;
  variant?: keyof typeof variantMapping;
  weight?: 'bold' | 'light' | 'regular' | 'semibold';
}

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  bodyTextNormal: 'p',
  bodyTextSmall: 'p',
  caption: 'caption',
  label: 'label',
};

const StyledTypography = styled(MuiTypography, {
  shouldForwardProp: (prop) => prop !== '$weight',
})<{ $weight: ITextProps['weight'] }>(({ $weight = 'regular', theme }) => ({
  fontWeight: theme.typography[$weight],
}));

const Text: React.FC<ITextProps> = ({ children, variant, weight, text, ...props }) => {
  return (
    <StyledTypography
      {...props}
      $weight={weight}
      variant={variant as TypographyProps['variant']}
      variantMapping={variantMapping}
    >
      {children || text}
    </StyledTypography>
  );
};

export default Text;
