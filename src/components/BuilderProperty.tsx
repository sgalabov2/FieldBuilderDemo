import { styled } from '@mui/material';

const BuilderPropertyContainer = styled('div')({
  display: 'flex',
  width: '100%',
  maxWidth: '500px',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '0.5em 0',
});

const InputFieldLabel = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: '42px',
  fontWeight: 500,
});

interface Props {
  label: string;
  children: React.ReactNode;
}

/**
 * Component for the builder property aligning the label and children
 * 
 * @param label    label for the property
 * @param children children components
 */
const BuilderProperty = ({ label, children }: Props) => {
  return (
    <BuilderPropertyContainer>
      <InputFieldLabel>{label}</InputFieldLabel>
      {children}
    </BuilderPropertyContainer>
  );
};

export default BuilderProperty;
