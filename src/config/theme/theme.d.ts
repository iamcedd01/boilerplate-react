import type { Theme } from '@mui/material/styles';
import type { DefaultThemeType } from './index';

export type NewVariant = 'h1' | 'h2' | 'h3' | 'bodyTextNormal' | 'bodyTextSmall' | 'caption' | 'label';

interface ISpace {
  /** 4px */
  xxs: string;
  /** 8px */
  xs: string;
  /** 16px */
  s: string;
  /** 24px */
  m: string;
  /** 32px */
  l: string;
  /** 40px */
  xl: string;
}

declare module '@mui/material/Typography' {
  interface TypographyClasses {
    bodyTextNormal: string;
    bodyTextSmall: string;
    caption: string;
    label: string;
  }

  interface TypographyPropsVariantOverrides {
    bodyTextNormal: true;
    bodyTextSmall: true;
    caption: true;
    label: true;
  }
}

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions extends Partial<Record<NewVariant, TypographyStyleOptions> & FontStyleOptions> {
    bodyTextNormal?: TypographyStyle;
    bodyTextSmall?: TypographyStyle;
    caption?: TypographyStyle;
    label?: TypographyStyle;

    bold?: number;
    semibold?: number;
    regular?: number;
    light?: number;
  }

  export interface Typography extends FontStyle, TypographyUtils {
    /** 28px / 33px */
    h1?: SerializedStyles;
    /** 24px / 29px */
    h2?: SerializedStyles;
    /** 20px / 25px */
    h3?: SerializedStyles;
    /** 16px / 21px */
    bodyTextNormal?: SerializedStyles;
    /** 14px / 19px */
    bodyTextSmall?: SerializedStyles;
    /** 14px / 19px · Letter Spacing 0.64 */
    label?: SerializedStyles;
    /** 12px / 17px */
    caption?: SerializedStyles;

    /** font-weight: 700 */
    bold?: number;
    /** font-weight: 600 */
    semibold?: number;
    /** font-weight: 400 */
    regular?: number;
    /** font-weight: 300 */
    light?: number;
  }
}

declare module '@mui/material/styles' {
  // interface Palette {
  //   blank: PaletteOptions['neutral'];
  //   /** #C22E28 */
  //   fist: SimplePaletteColorOptions;
  //   /** #6F35FC */
  //   draco: SimplePaletteColorOptions;
  //   /** #705746 */
  //   dread: SimplePaletteColorOptions;
  //   /** #E2BF65 */
  //   earth: SimplePaletteColorOptions;
  //   /** #EE8130 */
  //   flame: SimplePaletteColorOptions;
  //   /** #96D9D6 */
  //   icicle: SimplePaletteColorOptions;
  //   /** #A6B91A */
  //   insect: SimplePaletteColorOptions;
  //   /** #B7B7CE */
  //   iron: SimplePaletteColorOptions;
  //   /** #FFFFFF */
  //   legend: SimplePaletteColorOptions;
  //   /** #7AC74C */
  //   meadow: SimplePaletteColorOptions;
  //   /** #F95587 */
  //   mind: SimplePaletteColorOptions;
  //   /** #D685AD */
  //   pixie: SimplePaletteColorOptions;
  //   /** #A98FF3 */
  //   sky: SimplePaletteColorOptions;
  //   /** #6390F0 */
  //   splash: SimplePaletteColorOptions;
  //   /** #735797 */
  //   spooky: SimplePaletteColorOptions;
  //   /** #B6A136 */
  //   stone: SimplePaletteColorOptions;
  //   /** #A33EA1 */
  //   toxic: SimplePaletteColorOptions;
  //   /** #F7D02C */
  //   zap: SimplePaletteColorOptions;
  // }

  // type PaletteColorOptions = SimplePaletteColorOptions;

  // interface PaletteOptions {
  //   primary?: {
  //     light: string;
  //     main: string;
  //     dark: string;
  //     contrastText: string;
  //   };

  //   secondary?: {
  //     light: string;
  //     main: string;
  //     dark: string;
  //     contrastText: string;
  //   };

  //   success?: {
  //     main: string;
  //     light: string;
  //     dark: string;
  //     700: string;
  //     400: string;
  //     300: string;
  //     100: string;
  //   };

  //   warning?: {
  //     main: string;
  //     light: string;
  //     dark: string;
  //     700: string;
  //     400: string;
  //     300: string;
  //     100: string;
  //   };

  //   error?: {
  //     main: string;
  //     light: string;
  //     dark: string;
  //     700: string;
  //     400: string;
  //     300: string;
  //     100: string;
  //   };

  //   info?: {
  //     main: string;
  //     light: string;
  //     dark: string;
  //     700: string;
  //     400: string;
  //     300: string;
  //     100: string;
  //   };

  //   neutral: {
  //     primary: {
  //       main: string;
  //       10: string;
  //       20: string;
  //       40: string;
  //       50: string;
  //       60: string;
  //       65: string;
  //       70: string;
  //     };
  //     secondary: {
  //       main: string;
  //       5: string;
  //       10: string;
  //       20: string;
  //       30: string;
  //       40: string;
  //       50: string;
  //       60: string;
  //       70: string;
  //       80: string;
  //       85: string;
  //       90: string;
  //       95: string;
  //       100: string;
  //     };
  //   };

  //   fist: SimplePaletteColorOptions;
  //   draco: SimplePaletteColorOptions;
  //   dread: SimplePaletteColorOptions;
  //   earth: SimplePaletteColorOptions;
  //   flame: SimplePaletteColorOptions;
  //   icicle: SimplePaletteColorOptions;
  //   insect: SimplePaletteColorOptions;
  //   iron: SimplePaletteColorOptions;
  //   legend: SimplePaletteColorOptions;
  //   meadow: SimplePaletteColorOptions;
  //   mind: SimplePaletteColorOptions;
  //   pixie: SimplePaletteColorOptions;
  //   sky: SimplePaletteColorOptions;
  //   splash: SimplePaletteColorOptions;
  //   spooky: SimplePaletteColorOptions;
  //   stone: SimplePaletteColorOptions;
  //   toxic: SimplePaletteColorOptions;
  //   zap: SimplePaletteColorOptions;
  // }

  // interface PaletteColor {
  //   700: string;
  //   400: string;
  //   300: string;
  //   100: string;
  // }

  interface Theme {
    space: ISpace;
  }

  interface ThemeOptions {
    space?: ISpace;
  }
}

declare module '@mui/material/createStyled' {
  interface DefaultTheme extends DefaultThemeType, Theme {
    space: ISpace;
  }
}

declare module '@mui/material/createTheme' {
  interface Theme extends DefaultThemeType, Theme {
    space: ISpace;
  }

  interface BaseTheme extends DefaultThemeType, Theme {
    space: ISpace;
  }
}

declare module '@mui/private-theming/defaultTheme' {
  interface DefaultTheme extends DefaultThemeType, Theme {
    space: ISpace;
  }
}
