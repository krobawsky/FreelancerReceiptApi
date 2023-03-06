import { MenuItem } from "@mui/material";
import { SelectValidator } from "react-material-ui-form-validator";

interface Props {
  label: string;
  name: string;
  value: string;
  onInputChange: (params: any) => any;
  validators?: string[];
  errorMessages?: string[];
}

export const SelectInput = ({
  label,
  name,
  value,
  onInputChange,
  validators,
  errorMessages,
}: Props) => {
  return (
    <SelectValidator
      fullWidth
      variant="outlined"
      margin="normal"
      label={label}
      name={name}
      value={value}
      onChange={onInputChange}
      validators={validators}
      errorMessages={errorMessages}
    >
      <MenuItem value="$ ">Dolares</MenuItem>
      <MenuItem value="S/ ">Soles</MenuItem>
    </SelectValidator>
  );
};
