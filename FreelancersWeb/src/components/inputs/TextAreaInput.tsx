import { TextValidator } from 'react-material-ui-form-validator';

interface Props {
  label: string;
  name: string;
  value: string;
  onInputChange: (params: any) => any;
  validators?: string[];
  errorMessages?: string[];
}

export const TextAreaInput = ({ label, name, value, onInputChange, validators, errorMessages }: Props) => {
  return (
    <TextValidator
      fullWidth
      variant="outlined"
      margin="normal"
      label={label}
      name={name}
      multiline
      rows={2}
      value={value}
      onChange={onInputChange}
      validators={validators}
      errorMessages={errorMessages}
    />
  );
};
