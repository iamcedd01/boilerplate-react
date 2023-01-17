import { grey } from '@mui/material/colors';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export enum EFontWeight {
  BOLD = 700,
  SEMIBOLD = 600,
  REGULAR = 400,
  LIGHT = 300,
}

const typographyOptions: TypographyOptions = {
  h1: {
    fontSize: '28px',
    fontWeight: EFontWeight.REGULAR,
    letterSpacing: 1,
    lineHeight: '33px',
  },
  h2: {
    fontSize: '24px',
    fontWeight: EFontWeight.REGULAR,
    letterSpacing: 1,
    lineHeight: '29px',
  },
  h3: {
    fontSize: '20px',
    fontWeight: EFontWeight.REGULAR,
    lineHeight: '25px',
    letterSpacing: 1,
  },
  bodyTextNormal: {
    fontSize: '16px',
    lineHeight: '21px',
  },
  bodyTextSmall: {
    fontSize: '14px',
    lineHeight: '19px',
  },
  label: {
    fontSize: '14px',
    lineHeight: '19px',
    letterSpacing: 0.64,
  },
  caption: {
    color: grey[700],
    fontSize: '12px',
    lineHeight: '17px',
  },
  bold: EFontWeight.BOLD,
  semibold: EFontWeight.SEMIBOLD,
  regular: EFontWeight.REGULAR,
  light: EFontWeight.LIGHT,
};

export default typographyOptions;
