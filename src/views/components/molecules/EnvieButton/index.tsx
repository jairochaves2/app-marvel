import { LocationOn } from "@mui/icons-material";
import { Button, Grid, Hidden } from "@mui/material";
import React from "react";
import { useSelectedComics } from "../../../../contexts/comics/SelectionComics.context";
const EnvieButton: React.FC = () => {
  const { comicsSelect } = useSelectedComics();

  return (
    <Hidden xsUp={comicsSelect.length <= 0}>
      <Grid item xs={5} sm={3} md={2}>
        <Button
          startIcon={<LocationOn />}
          fullWidth
          color="info"
          variant="outlined"
        >
          Envie-me
        </Button>
      </Grid>
    </Hidden>
  );
};

export default EnvieButton;
