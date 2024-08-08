import { useRef, useState } from 'react';
import CustomTextField from './CustomInputField';
import { IconButton, Menu, MenuItem, styled } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { SortingTypeEnum } from '../types/common';

const DropdownSelectContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

const Test = styled('div')({
  background: '#eeeeee',
  border: '1px solid #6F7E8C',
  borderLeftWidth: 0,
  borderRadius: '0 4px 4px 0',
  height: '40px',
});

interface Props {
  value: SortingTypeEnum;
  onChange: (v: SortingTypeEnum) => void;
  options: SortingTypeEnum[];
}

/**
 * Dropdown Select Component
 * 
 * @param value selected value for the dropdown
 * @param onChange
 * @param options
 */
const DropdownSelect = ({ value, onChange, options }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const textRef = useRef<HTMLInputElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = () => {
    setAnchorEl(textRef.current);
  };

  const handleClose = (value: SortingTypeEnum) => {
    onChange(value);
    setAnchorEl(null);
  };

  return (
    <DropdownSelectContainer>
      <CustomTextField
        ref={textRef}
        disabled
        value={value}
        styles={{
          borderRadius: '4px 0 0 4px',
          width: '210px',
        }}
      />
      <Test>
        <IconButton onClick={handleClick} disableTouchRipple>
          <ArrowDropDown />
        </IconButton>
      </Test>
      <Menu
        id='long-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {options.map((value) => (
          <MenuItem key={value} onClick={() => handleClose(value)}>
            {value}
          </MenuItem>
        ))}
      </Menu>
    </DropdownSelectContainer>
  );
};

export default DropdownSelect;
