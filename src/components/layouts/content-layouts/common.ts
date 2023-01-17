/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { css, Theme } from '@mui/material/styles';
import { DefaultTheme } from 'config/theme';

export const shouldForwardProp = (props: string[] = []) => ({
  shouldForwardProp: (prop: unknown) =>
    ![
      'direction',
      'gap',
      'padding',
      'paddingY',
      'paddingX',
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'scroll',
      ...props,
    ].includes(prop as string),
});

type IScrollProps = boolean | 'auto' | 'hidden' | 'overlay' | 'scroll' | 'unset';

interface IInternalCommonSpacingProps {
  theme: Theme;
  gap?: keyof typeof DefaultTheme['space'] | 'none';
  padding?: keyof typeof DefaultTheme['space'];
  paddingY?: keyof typeof DefaultTheme['space'];
  paddingX?: keyof typeof DefaultTheme['space'];
  paddingTop?: keyof typeof DefaultTheme['space'];
  paddingBottom?: keyof typeof DefaultTheme['space'];
  paddingLeft?: keyof typeof DefaultTheme['space'];
  paddingRight?: keyof typeof DefaultTheme['space'];
  scroll?: IScrollProps;
  scrollX?: IScrollProps;
  scrollY?: IScrollProps;
}

export type ICommonSpacingProps = Omit<IInternalCommonSpacingProps, 'theme'>;

export const commonSpacingStyles = ({
  theme,
  gap,
  padding,
  paddingY,
  paddingX,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  scroll,
  scrollX,
  scrollY,
}: IInternalCommonSpacingProps) => css`
  box-sizing: border-box;

  ${scroll &&
  css`
    overflow: ${typeof scroll === 'boolean' && scroll ? 'auto' : scroll};
  `}

  ${scrollX &&
  css`
    overflow: ${typeof scrollX === 'boolean' && scrollX ? 'auto' : scrollX};
  `}
    
    
  ${scrollY &&
  css`
    overflow: ${typeof scrollY === 'boolean' && scrollY ? 'auto' : scrollY};
  `}

  ${gap &&
  gap !== 'none' &&
  css`
    gap: ${theme.space[gap]};
  `}

  ${padding &&
  css`
    padding: ${theme.space[padding]};
  `}

  ${paddingY &&
  css`
    padding-top: ${theme.space[paddingY]};
    padding-bottom: ${theme.space[paddingY]};
  `}
  
  ${paddingX &&
  css`
    padding-left: ${theme.space[paddingX]};
    padding-right: ${theme.space[paddingX]};
  `}
  
  ${paddingTop &&
  css`
    padding-top: ${theme.space[paddingTop]};
  `}
  
  ${paddingBottom &&
  css`
    padding-bottom: ${theme.space[paddingBottom]};
  `}
  
  ${paddingLeft &&
  css`
    padding-left: ${theme.space[paddingLeft]};
  `}
  
  ${paddingRight &&
  css`
    padding-right: ${theme.space[paddingRight]};
  `}
`;

interface IInternalCommonGridProps {
  theme: Theme;
  gridColumn?: string;
  gridRow?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
}

export type ICommonGridProps = Omit<IInternalCommonGridProps, 'theme'>;

export const commonGridStyles = ({
  gridColumn,
  gridRow,
  gridTemplateColumns = 'calc(100%)',
  gridTemplateRows = 'calc(100%)',
}: IInternalCommonGridProps) =>
  css`
    ${gridColumn &&
    css`
      grid-column: ${gridColumn};
    `};

    ${gridRow &&
    css`
      grid-row: ${gridRow};
    `};

    ${gridTemplateColumns &&
    css`
      grid-template-columns: ${gridTemplateColumns};
    `};

    ${gridTemplateRows &&
    css`
      grid-template-rows: ${gridTemplateRows};
    `};
  `;
