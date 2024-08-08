export interface IFormInput {
  label: string;
  default: string;
  sortingType: SortingTypeEnum;
}

export interface Choice {
  value: string;
  isSelected: boolean;
}

export interface Field {
  label: string;
  default: string;
  choices: string[];
  required?: boolean;
  displayAlpha?: boolean;
}

export enum SortingTypeEnum {
  ALPHABETICAL_ASC = 'Alphabetical (A-Z)',
  ALPHABETICAL_DESC = 'Alphabetical (Z-A)',
  LENGTH_ASC = 'Length Asc',
  LENGTH_DESC = 'Length Desc',
}
