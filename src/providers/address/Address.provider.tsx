import React from "react";
import AddressContext from "../../contexts/address/Address.context";

const AddressProvider: React.FC = ({ children }) => {
  const [address, setAddressState] = React.useState("");
  const [openDialogAddress, setOpenDialogAddressState] = React.useState(false);
  const setAddress = (newAddress: string) => {
    setAddressState(newAddress);
  };
  const toggleOpenDialogAddress = () => {
    setOpenDialogAddressState((oldValue) => !oldValue);
  };

  return (
    <AddressContext.Provider
      value={{
        address,
        setAddress,
        openDialogAddress,
        toggleOpenDialogAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
export default AddressProvider;
