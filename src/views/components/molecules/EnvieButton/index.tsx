import { LocationOn } from "@mui/icons-material";
import { Button, Grid, Hidden } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useSelectedComics } from "../../../../hooks/contexts.hooks";
const EnvieButton: React.FC = () => {
  const { comicsSelect } = useSelectedComics();

  return (
    <Hidden xsUp={comicsSelect.length <= 0}>
      <Grid item xs={5} sm={3} md={2}>
        <Link style={{ textDecoration: "none" }} to="/">
          <Button
            startIcon={<LocationOn />}
            fullWidth
            color="info"
            variant="outlined"
          >
            Envie-me
          </Button>
        </Link>
      </Grid>
    </Hidden>
  );
};

export default EnvieButton;
