import { styled } from '@mui/material';
import CustomInputField from './CustomInputField';
import { useEffect, useState } from 'react';
import BuilderProperty from './BuilderProperty';
import MultiSelectChoices from './MultiSelectChoices';
import DropdownSelect from './DropdownSelect';
import CustomButton from './CustomButton';
import FieldType from './FieldType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Choice, IFormInput, SortingTypeEnum } from '../types/common';
import FieldService from '../services/MockService';

const BuilderContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '600px',
  marginTop: '20px',
  border: '2px solid #d9edf7',
  borderRadius: 4,
  fontSize: '1em',
});

const BuilderHeader = styled('div')({
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: '#1f6c93',
  backgroundColor: '#d9edf7',
  padding: '0.5em',
});

const BuilderContent = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.25em 1em',
});

const Buttons = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: '1em',
});

const Errors = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  color: 'red',
  padding: '0.5em 0',
});

interface Props {
  choices: string[];
}

const orderChoices = [
  SortingTypeEnum.ALPHABETICAL_ASC,
  SortingTypeEnum.ALPHABETICAL_DESC,
  SortingTypeEnum.LENGTH_ASC,
  SortingTypeEnum.LENGTH_DESC,
];

/**
 * Component wrapping the form for the field builder
 * 
 * @param choices array of choices for multi-select area
 */
const FieldBuilder = ({ choices }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const [selectedChoices, setSelectedChoices] = useState<Choice[]>(
    choices.map((value) => ({
      value,
      isSelected: false,
    }))
  );
  const [selectedSortType, setSelectedSortType] = useState<SortingTypeEnum>(orderChoices[0])

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setSelectedChoices((current) => [
      ...current,
      { value: data.default, isSelected: false },
    ]);
    FieldService.saveField({
      ...data,
      choices: selectedChoices.map((c) => c.value),
    });

    reset();
  };

  useEffect(() => {

  }, [])


  return (
    <BuilderContainer>
      <BuilderHeader>Field Builder</BuilderHeader>
      <BuilderContent onSubmit={handleSubmit(onSubmit)}>
        <BuilderProperty label='Label'>
          <CustomInputField
            autoComplete='off'
            {...register('label', { required: 'Label is required' })}
          />
        </BuilderProperty>
        <BuilderProperty label='Type'>
          <FieldType />
        </BuilderProperty>
        <BuilderProperty label='Default Value'>
          <CustomInputField
            autoComplete='off'
            {...register('default', {
              validate: (value) => {
                const set = new Set(selectedChoices.map((c) => c.value));
                if (value.length > 40)
                  return 'Default value must be less than 40 characters';
                if (set.has(value))
                  return 'Default value must not be one of the choices';
                if (selectedChoices.length > 50)
                  return 'Choices cannot exceed 50 items';
              },
            })}
          />
        </BuilderProperty>
        <BuilderProperty label='Choices'>
          <MultiSelectChoices
            values={selectedChoices}
            handleChoicesChange={(newChoices) => {
              setSelectedChoices(newChoices);
            }}
          />
        </BuilderProperty>
        <BuilderProperty label='Order'>
          <DropdownSelect value={selectedSortType} onChange={(v) => setSelectedSortType(v)} options={orderChoices} />
        </BuilderProperty>

        <Errors>
          {errors.label && <span>{errors.label.message}</span>}
          {errors.default && <span>{errors.default.message}</span>}
        </Errors>

        <Buttons>
          <CustomButton option='error' disableRipple onClick={() => reset()}>
            Cancel
          </CustomButton>
          <CustomButton option='success' disableRipple type='submit'>
            Save Changes
          </CustomButton>
        </Buttons>
      </BuilderContent>
    </BuilderContainer>
  );
};

export default FieldBuilder;
