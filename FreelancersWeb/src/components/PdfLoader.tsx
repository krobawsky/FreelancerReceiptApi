import {
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { IReceipt } from "../models/IReceipt";

const styles = StyleSheet.create({
  size: { height: "500px", width: "100%" },
  page: {
    flexDirection: "column",
  },
  image: {
    width: "50%",
    padding: 10,
  },
  centerImage: {
    alignItems: "center",
    flexGrow: 1,
  },
  text: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 50,
    paddingVertical: 30,
    color: "#212121",
  },
});

interface Props {
  data: IReceipt;
}

export const PdfLoader = ({ data }: Props) => {
  return (
    <PDFViewer style={styles.size}>
      <Document>
        <Page style={styles.page} size="A4">
          <Text style={styles.text}>{data.logo}</Text>
          <Text style={styles.text}>{data.title}</Text>
          <Text style={styles.text}>{data.description}.</Text>
          <Text style={styles.text}>Nombre Completo: {data.fullName}</Text>
          <Text style={styles.text}>
            Monto pagado: {data.coinType} {data.charge}
          </Text>
          <Text style={styles.text}>Direccion: {data.address}.</Text>
          <Text style={styles.text}>
            Tipo de documento: {data.documentType}
          </Text>
          <Text style={styles.text}>
            Nro de documento: {data.documentNumber}
          </Text>
        </Page>
      </Document>
    </PDFViewer>
  );
};
