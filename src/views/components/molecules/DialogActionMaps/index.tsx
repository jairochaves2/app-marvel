import { Button, DialogActions } from "@mui/material";
import React from "react";
import { useAddress } from "../../../../hooks/contexts.hooks";
import ButtonFinalizeOrder from "../../atoms/Buttons/ButtonFinalizeOrder";
interface Props {
  onFinalize?: () => void;
}
export default function DialogActionMaps({ onFinalize }: Props) {
  const { toggleOpenDialogAddress } = useAddress();
  return (
    <DialogActions>
      <ButtonFinalizeOrder onClick={onFinalize} />

      <Button
        onClick={toggleOpenDialogAddress}
        color="error"
        variant="outlined"
      >
        Fechar
      </Button>
    </DialogActions>
  );
}
