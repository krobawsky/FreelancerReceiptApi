import axios from 'axios';
import { IReceipt } from '../models/IReceipt';
import { loadAbort } from '../utilities/load-abort-axios.utility';

const api = "https://localhost:44353/api";

export const create = (data: any ) => {
  const controller = loadAbort();
  delete data.file;
  console.log(data)
  return {
    call: axios.post<IReceipt>(`${api}/recibo/crear`, data, { signal: controller.signal }),
    controller
  };
};

export const list = () => {
  const controller = loadAbort();
  return {
    call: axios.get<IReceipt[]>(`${api}/recibo/lista`, { signal: controller.signal }),
    controller
  };
};