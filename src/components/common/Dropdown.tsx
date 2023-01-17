import MuiFormControl from '@mui/material/FormControl';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiSelect, { SelectProps } from '@mui/material/Select';
import { css, styled } from '@mui/material/styles';

export interface ISelectOptionKeyValue {
  /**
   * Set the option label.
   */
  label: string;
  /**
   * Set the option value.
   */
  value: number | string;
}

export type ISelectItem = ISelectOptionKeyValue;
export type ISelectValue = ISelectOptionKeyValue['value'];

export interface ISelectProps extends SelectProps<ISelectValue> {
  /**
   * Set the dropdown options.
   */
  items: ISelectOptionKeyValue[];
  /**
   * Set the dropdown options to wrap on overflow.
   */
  wrap?: boolean;
}

const StyledSelect = styled((props: SelectProps<ISelectValue>) => <MuiSelect<ISelectValue> {...props} />, {
  shouldForwardProp: (prop) => prop !== '$wrap',
})<{
  $wrap: boolean;
}>(
  ({ $wrap }) => css`
    ${$wrap &&
    css`
      & > .MuiSelect-select {
        text-overflow: unset;
        white-space: pre-wrap;
      }
    `}

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-width: 1px;
    }
  `,
);

const Dropdown: React.FC<ISelectProps> = ({ items, label, id, required, sx, classes, size, wrap, ...props }) => {
  return (
    <MuiFormControl {...{ sx, classes, required, size }}>
      <MuiInputLabel id={id} error={props.error}>
        {label}
      </MuiInputLabel>
      <StyledSelect $wrap={!!wrap} {...props} id={id}>
        {items.map((item) => (
          <MuiMenuItem key={item.value} value={item.value}>
            {item.label}
          </MuiMenuItem>
        ))}
      </StyledSelect>
    </MuiFormControl>
  );
};

export type { SelectChangeEvent } from '@mui/material/Select';

export default Dropdown;
