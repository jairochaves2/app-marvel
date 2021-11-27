import { Typography } from "@mui/material";
import React from "react";
import FinalizeOrderButton from "../../atoms/Buttons/FinalizeOrderButton";
import AppBarComic from "../../molecules/AppBarComic";

export default function NavbarSendMe() {
  return (
    <AppBarComic>
      <Typography
        variant="h5"
        color="primary"
        sx={{ bgcolor: "white", p: 1.5, borderRadius: "8px" }}
      >
        QUADRINHOS SELECIONADOS
      </Typography>
      <FinalizeOrderButton />
    </AppBarComic>
  );
}
