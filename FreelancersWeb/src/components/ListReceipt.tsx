import React, { useState } from "react";
import { useAsync, useFetchAndLoad } from "../hooks";
import { IReceipt } from "../models/IReceipt";
import { list } from "../services/receipt.service";
import { PdfLoader } from "./PdfLoader";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { IconButton } from "@mui/material";

export const ListReceipt = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [receipts, setReceipts] = useState([] as IReceipt[]);
  const [receipt, setReceipt] = useState({ id: 0 } as IReceipt);

  const getApiData = async () => await callEndpoint(list());

  const setDataList = (data: IReceipt[]) => {
    setReceipts(data);
  };

  const selectReceipt = (data: IReceipt) => {
    setReceipt(data);
  };

  useAsync(getApiData, setDataList, () => {});

  return (
    <>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Tus recibos</span>
        <span className="badge bg-primary rounded-pill">{receipts.length}</span>
      </h4>
      <ul className="list-group mb-3">
        {loading ? (
          <h3> Cargando... </h3>
        ) : (
          receipts.map((receipt) => (
            <li className="list-group-item d-flex lh-sm" key={receipt.id}>
              <IconButton onClick={() => selectReceipt(receipt)}>
                <PictureAsPdfOutlinedIcon />
              </IconButton>
              <div className="flex-grow-1 ">
                <h6 className="my-0">{receipt.title}</h6>
                <small className="text-muted">{receipt.description}</small>
              </div>
              <span className="text-muted ">
                {receipt.coinType} {receipt.charge}
              </span>
            </li>
          ))
        )}
      </ul>
      {receipt.id != 0 ? <PdfLoader data={receipt} /> : <></>}
    </>
  );
};
