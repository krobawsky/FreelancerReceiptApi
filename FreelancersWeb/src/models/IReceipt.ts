export interface IReceipt {
  id:             number;
  logo:           string;
  coinType:       string;
  charge:         number;
  title:          string;
  description:    string;
  address:        string;
  fullName:       string;
  documentType:   string;
  documentNumber: string;
  creationDate:   Date;
}
