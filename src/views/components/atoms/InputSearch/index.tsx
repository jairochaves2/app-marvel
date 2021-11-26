import { Input } from "@mui/material";
import React from "react";
import { useSearchText } from "../../../../contexts/comics/SearchText.context";

const InputSearch: React.FC = () => {
  const { setSearchText } = useSearchText();
  return (
    <Input
      disableUnderline
      sx={{ bgcolor: "white", p: 1, borderRadius: "10px" }}
      placeholder="Buscar"
      fullWidth
      onChange={(event) => {
        setSearchText(event.target.value);
      }}
    />
  );
};

export default InputSearch;
