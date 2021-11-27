import { Button } from "@mui/material";
import React from "react";
import {
  useAddress,
  useSearchText,
  useSelectedComics,
} from "../../../../../hooks/contexts.hooks";
import { useNavigate } from "react-router";

interface Props {
  onClick?: () => void;
}

export default function FinalizeOrderButton({ onClick }: Props) {
  const { address, setAddress, toggleOpenDialogAddress } = useAddress();
  const navigate = useNavigate();
  const { setComicsSelect } = useSelectedComics();
  const { setSearchText } = useSearchText();
  return (
    <Button
      onClick={() => {
        if (address) {
          if (onClick) {
            onClick();
          }

          setTimeout(() => {
            toggleOpenDialogAddress();
            navigate("/");
            setAddress("");
            setComicsSelect(undefined);
            setSearchText("");
          }, 3000);
        }
      }}
      color="success"
      variant="contained"
    >
      Finalizar Pedido
    </Button>
  );
}
