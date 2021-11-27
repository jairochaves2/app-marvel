import { LocalShipping } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import React from "react";
import { useAddress } from "../../../../../hooks/contexts.hooks";

export default function DefineAddressButton() {
  const { toggleOpenDialogAddress } = useAddress();
  return (
    <Grid
      item
      xs={12}
      sm={7}
      md={4}
      sx={{ bgcolor: "white", borderRadius: "8px" }}
    >
      <Button
        startIcon={<LocalShipping />}
        fullWidth
        color="info"
        variant="outlined"
        onClick={toggleOpenDialogAddress}
      >
        Definir endereço de entrega
      </Button>
    </Grid>
  );
}
