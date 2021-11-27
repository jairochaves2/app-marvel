import React from "react";
import AddressContext from "../../contexts/address/Address.context";

const AddressProvider: React.FC = ({ children }) => {
  const [address, setAddressState] = React.useState("");
  const setAddress = (newAddress: string) => {
    setAddressState(newAddress);
  };

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
export default AddressProvider;
