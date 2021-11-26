import { AppBar, Grid, Toolbar } from "@mui/material";
import React from "react";
import EnvieButton from "../../molecules/EnvieButton";
import Search from "../../molecules/Search";
const Navbar: React.FC = () => {
  return (
    <AppBar position="relative" sx={{ mb: 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          bgcolor: "#dddddd",
        }}
      >
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          <Search />
          <EnvieButton />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
