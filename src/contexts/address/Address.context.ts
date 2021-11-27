import { createContext } from "react";
import { AddressContextType } from "../../interfaces/contexts/address/Address.interface";

const AddressContext = createContext<AddressContextType>({
  address: "",
  setAddress: () => {},
});

export default AddressContext;
