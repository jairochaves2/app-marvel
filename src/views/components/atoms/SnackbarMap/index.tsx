import { Alert, Snackbar } from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
}

export default function SnackbarMap({ open }: Props) {
  return (
    <Snackbar
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      open={open}
    >
      <Alert severity="success" sx={{ width: "100%" }}>
        Pedido Finalizado
      </Alert>
    </Snackbar>
  );
}
