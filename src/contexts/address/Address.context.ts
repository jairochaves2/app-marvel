import { createContext } from "react";
import { AddressContextType } from "../../interfaces/contexts/address/Address.interface";

const AddressContext = createContext<AddressContextType>({
  address: "",
  setAddress: () => {},
  openDialogAddress: false,
  toggleOpenDialogAddress: () => {},
});

export default AddressContext;
