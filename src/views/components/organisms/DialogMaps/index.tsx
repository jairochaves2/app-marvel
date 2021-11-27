import React from "react";
import { Dialog } from "@mui/material";
import { useAddress } from "../../../../hooks/contexts.hooks";
import GoogleMapComics from "../../atoms/GoogleMapComics";
import InputAddress from "../../atoms/InputAddress";
import SnackbarMap from "../../atoms/SnackbarMap";
import DialogActionMaps from "../../molecules/DialogActionMaps";

export default function DialogMaps() {
  const [openSnack, setOpenSnack] = React.useState(false);
  const { openDialogAddress, toggleOpenDialogAddress } = useAddress();

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={openDialogAddress}
      scroll="body"
      onClose={toggleOpenDialogAddress}
    >
      <GoogleMapComics />
      <InputAddress />

      <DialogActionMaps onFinalize={() => setOpenSnack(true)} />
      <SnackbarMap open={openSnack} />
    </Dialog>
  );
}
