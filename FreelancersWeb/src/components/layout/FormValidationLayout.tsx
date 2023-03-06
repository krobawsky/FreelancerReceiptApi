import React, { ReactNode } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';

interface Props {
  children: ReactNode;
  handleSubmit: (params: any) => any;
}

export const FormValidationLayout = ({ children, handleSubmit }: Props) => {
  return (
    <ValidatorForm className="w-100" autoComplete="off" onSubmit={handleSubmit}>
      {children}
    </ValidatorForm>
  );
};
