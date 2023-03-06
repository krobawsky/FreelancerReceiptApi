import { TextValidator } from 'react-material-ui-form-validator';

interface Props {
  label: string;
  name: string;
  value: string;
  onInputChange: (params: any) => any;
  validators?: string[];
  errorMessages?: string[];
}

export const TextInput = ({ label, name, value, onInputChange, validators, errorMessages }: Props) => {
  return (
    <TextValidator
      fullWidth
      variant="outlined"
      margin="normal"
      label={label}
      name={name}
      value={value}
      onChange={onInputChange}
      validators={validators}
      errorMessages={errorMessages}
    />
  );
};
