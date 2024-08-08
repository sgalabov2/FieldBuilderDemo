import { styled } from '@mui/material';
import FieldBuilder from './components/FieldBuilder';
import FieldService from './services/MockService';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '1em',
  border: '1px solid #d9edf7',
  borderRadius: 4,
  margin: '1em',
});

const App = () => {
  const { choices } = FieldService.getField();

  return (
    <Container>
      <FieldBuilder choices={choices} />
    </Container>
  );
};

export default App;
