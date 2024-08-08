import { Button, styled } from '@mui/material';

interface Props {
  option: 'success' | 'error';
}

/**
 * Custom Material Button Component
 * 
 * @param option button option for styling
 */
const CustomButton = styled(Button)<Props>(({ option }) => {
  const baseStyles = {
    borderRadius: 4,
    padding: '4px 12px',
    height: '32px',
    margin: '0 8px 0 0',
  };

  switch (option) {
    case 'success':
      return {
        ...baseStyles,
        background: '#5bb85b',
        color: 'white',
        '&:hover': {
          background: '#5bb85b',
        },
      };
    case 'error':
      return {
        ...baseStyles,
        background: 'transparent',
        color: '#ff0000',
        '&:hover': {
          background: 'transparent',
        },
      };

    default:
      return {};
  }
});

export default CustomButton;
