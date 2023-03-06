import { IconButton } from "@mui/material";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import LinkIcon from "@mui/icons-material/Link";

export const SelectFileBtnInput = ({ onChange = (event: any) => {} }) => {
  return (
    <>
      <IconButton color="primary" aria-label="upload file" component="label">
        <input hidden accept="pdf/*" type="file" onChange={onChange} />
        <FileUploadIcon />
      </IconButton>
    </>
  );
};
