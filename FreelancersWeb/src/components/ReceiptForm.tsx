import { Box, Button, Grid, Stack } from "@mui/material";
import React from "react";
import { useFetchAndLoad, useForm } from "../hooks";
import { create } from "../services/receipt.service";
import { SelectFileBtnInput } from "./inputs/SelectFileBtnInput";
import { SelectInput } from "./inputs/SelectInput";
import { TextAreaInput } from "./inputs/TextAreaInput";
import { TextInput } from "./inputs/TextInput";
import { FormValidationLayout } from "./layout/FormValidationLayout";

const formFields = {
  Logo: "",
  CoinType: "",
  Charge: 0,
  Title: "",
  Description: "",
  Address: "",
  FullName: "",
  DocumentType: "",
  DocumentNumber: "",
  file: null,
};

export const ReceiptForm = () => {
  const { loading, callEndpoint } = useFetchAndLoad();

  const {
    formState,
    setFormState,
    onInputChange,
    // form values
    Logo,
    CoinType,
    Charge,
    Title,
    Description,
    Address,
    FullName,
    DocumentType,
    DocumentNumber,
  } = useForm(formFields);

  const handleSubmit = async () => {
    formState.Charge = +Charge;
    const res = await callEndpoint(create(formState));
    console.log(res);
  };

  const onFileChange = (event: any) =>
    event.target.files.length &&
    setFormState({
      ...formState,
      file: event.target.files[0],
      Logo: event.target.files[0].name,
    });

  return (
    <>
      <h4 className="mb-3">Formulario Recibo</h4>

      <FormValidationLayout handleSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ mt: 2, mb: 4 }}>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box className="w-100">
                <TextInput
                  label="Logo"
                  name="Logo"
                  value={Logo}
                  onInputChange={onInputChange}
                />
              </Box>
              <SelectFileBtnInput onChange={onFileChange} />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6}>
            <SelectInput
              label="Tipo de Moneda"
              name="CoinType"
              value={CoinType}
              onInputChange={onInputChange}
              validators={["required"]}
              errorMessages={["Completa este campo"]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              label="Monto"
              name="Charge"
              value={Charge}
              onInputChange={onInputChange}
              validators={["required"]}
              errorMessages={["Completa este campo"]}
            />
          </Grid>

          <Grid item xs={12}>
            <TextInput
              label="Titulo"
              name="Title"
              value={Title}
              onInputChange={onInputChange}
              validators={["required"]}
              errorMessages={["Completa este campo"]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextAreaInput
              label="Descripción"
              name="Description"
              value={Description}
              onInputChange={onInputChange}
              validators={["required"]}
              errorMessages={["Completa este campo"]}
            />
          </Grid>

          <Grid item xs={12}>
            <TextInput
              label="Dirección"
              name="Address"
              value={Address}
              onInputChange={onInputChange}
              validators={["required"]}
              errorMessages={["Completa este campo"]}
            />
          </Grid>

          <Grid item xs={12}>
            <TextInput
              label="Nombre Completo"
              name="FullName"
              value={FullName}
              onInputChange={onInputChange}
              validators={["required"]}
              errorMessages={["Completa este campo"]}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextInput
              label="Tipo de Documento"
              name="DocumentType"
              value={DocumentType}
              onInputChange={onInputChange}
              validators={["required"]}
              errorMessages={["Completa este campo"]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              label="Nro Documento"
              name="DocumentNumber"
              value={DocumentNumber}
              onInputChange={onInputChange}
              validators={["required"]}
              errorMessages={["Completa este campo"]}
            />
          </Grid>

          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="info"
              disableElevation
              sx={{ color: "#FFF", width: "100%", mt: 2 }}
            >
              Crear Recibo
            </Button>
          </Grid>
        </Grid>
      </FormValidationLayout>
    </>
  );
};
