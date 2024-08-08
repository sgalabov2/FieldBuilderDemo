import { Field, SortingTypeEnum } from '../types/common';

const FieldService = {
  field: {
    label: 'Sales region',
    required: false,
    choices: [
      'Asia',
      'Australia',
      'Western Europe',
      'North America',
      'Eastern Europe',
      'Latin America',
      'Middle East and Africa',
      'ATest2',
      'CTest1',
      'FTest5',
      'PTest1',
    ],
    displayAlpha: true,
    default: 'North America',
    sortingType: SortingTypeEnum.ALPHABETICAL_ASC,
  } as Field,

  getField: function () {
    return this.field;
  },
  saveField: async function (fieldJson: Field) {
    // Add the code here to call the API (or temporarily, just log fieldJson to the console)
    const postData = {
      ...this.field,
      ...fieldJson,
    };

    console.log('Post Data: ', postData);

    const response = await fetch(
      'https://run.mocky.io/v3/950dc5bf-71bf-4134-bb6c-541e9fc68e8d',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      }
    );

    if (response.status !== 429) {
      throw new Error('Error saving field');
    }
  },
};

export default FieldService;
