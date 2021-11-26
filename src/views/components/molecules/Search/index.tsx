import { Grid } from "@mui/material";
import React from "react";
import InputSearch from "../../atoms/InputSearch";
const Search: React.FC = () => {
  return (
    <Grid item xs={7} sm={9} md={6} lg={4}>
      <InputSearch />
    </Grid>
  );
};

export default Search;
