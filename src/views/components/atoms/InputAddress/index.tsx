import { TextField } from "@mui/material";
import React from "react";
import { useAddress } from "../../../../hooks/contexts.hooks";

export default function InputAddress() {
  const { address, setAddress } = useAddress();
  return address ? (
    <div style={{ paddingTop: 8, paddingLeft: 8, paddingRight: 8 }}>
      <TextField
        label="Endereço"
        placeholder="Buscar"
        fullWidth
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
    </div>
  ) : (
    <></>
  );
}
