import { AppBar, Grid, Toolbar } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function AppBarComic({ children }: Props) {
  return (
    <AppBar position="relative" sx={{ mb: 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          bgcolor: "#dddddd",
        }}
      >
        <Grid
          container
          gap={1}
          alignItems="center"
          justifyContent="center"
          sx={{ padding: 1 }}
        >
          {children}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
