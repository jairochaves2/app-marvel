import { Typography } from "@mui/material";
import React from "react";
import DefineAddressButton from "../../atoms/Buttons/ButtonDefineAddress";
import AppBarComic from "../../molecules/AppBarComic";

export default function NavbarSendMe() {
  return (
    <AppBarComic>
      <Typography variant="h5" color="primary">
        QUADRINHOS SELECIONADOS
      </Typography>
      <DefineAddressButton />
    </AppBarComic>
  );
}
