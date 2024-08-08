import { styled } from '@mui/material';
import { Choice } from '../types/common';

const ChoicesContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '270px',
  border: '1px solid #6F7E8C',
  borderRadius: 4,
  maxHeight: '150px',
  overflow: 'auto',
});

interface ChoiceProps {
  isSelected: boolean;
}

const ChoiceContainer = styled('div')<ChoiceProps>(({ isSelected }) => ({
  padding: '6px 8px',
  cursor: 'pointer',
  backgroundColor: isSelected ? '#f5f5f5' : 'white',
}));

interface Props {
  values: Choice[];
  handleChoicesChange: (choices: Choice[]) => void;
}

/**
 * Component to display an area with text choices that can be selected
 * 
 * @param values              array of choices for the multi-select area
 * @param handleChoicesChange function to handle changes on the selected choices
 */
const MultiSelectChoices = ({ values, handleChoicesChange }: Props) => {
  const handleOnClick = (value: string) => {
    const newChoices = values.map((c) => {
      if (c.value === value) {
        return {
          ...c,
          isSelected: !c.isSelected,
        };
      }
      return c;
    });

    handleChoicesChange(newChoices);
  };

  return (
    <ChoicesContainer>
      {values.map((choice) => (
        <ChoiceContainer
          key={choice.value}
          isSelected={choice.isSelected}
          onClick={() => handleOnClick(choice.value)}
        >
          {choice.value}
        </ChoiceContainer>
      ))}
    </ChoicesContainer>
  );
};

export default MultiSelectChoices;
