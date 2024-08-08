import { InputBase, styled } from '@mui/material';

interface Props {
  styles?: React.CSSProperties;
}

/**
 * Custom Material InputBase Component
 * 
 * @param styles additional styles for the textfield
 */
const CustomTextField = styled(InputBase)<Props>(({ styles }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    border: '1px solid #6F7E8C',
    color: '#1E1E1E',
    width: '250px',
    height: '24px',
    fontSize: '1em',
    padding: '8px 10px',
    '&:focus': {
      borderColor: '#6F7E8C',
    },
    ...styles,
  },
}));

export default CustomTextField;
