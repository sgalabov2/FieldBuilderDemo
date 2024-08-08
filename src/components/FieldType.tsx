import { FormControlLabel, Checkbox, styled } from '@mui/material';

const FieldTypeContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

/**
 * Component for the field type with a checkbox for required
 */
const FieldType = () => (
  <FieldTypeContainer>
    <div>Multi-select</div>
    <div>
      <FormControlLabel
        label='A Value is required'
        control={<Checkbox checked color='default' />}
        style={{ margin: '0' }}
      />
    </div>
  </FieldTypeContainer>
);

export default FieldType;
