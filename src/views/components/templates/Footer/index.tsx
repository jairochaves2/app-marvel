import { Pagination } from "@mui/material";
import React from "react";
import { getQuantidadePaginas } from "../../../../helpers/MarvelApi.helper";
import { useLoading, usePage, useTotalComics } from "../../../../hooks/contexts.hooks";

export default function Footer() {
  const { loading } = useLoading();
  const { page, setPage } = usePage();
  const { totalComics } = useTotalComics();

  return (
    <footer className="App-footer">
      {!loading && (
        <Pagination
          sx={{ bgcolor: "white", p: 1, borderRadius: "10px" }}
          count={getQuantidadePaginas(totalComics)}
          color="standard"
          variant="outlined"
          page={page}
          onChange={(_, value) => {
            setPage(value);
          }}
        />
      )}
    </footer>
  );
}
