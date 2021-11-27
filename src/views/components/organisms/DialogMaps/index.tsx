import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  Snackbar,
  TextField,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import {
  useAddress,
  useSearchText,
  useSelectedComics,
} from "../../../../hooks/contexts.hooks";
import GoogleMapComics from "../../atoms/GoogleMapComics";
import InputAddress from "../../atoms/InputAddress";

export default function DialogMaps() {
  const [openSnack, setOpenSnack] = React.useState(false);
  const { openDialogAddress, toggleOpenDialogAddress, address, setAddress } =
    useAddress();
  const { setSearchText } = useSearchText();
  const navigate = useNavigate();
  const { setComicsSelect } = useSelectedComics();
  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={openDialogAddress}
      scroll="body"
      onClose={toggleOpenDialogAddress}
    >
      <GoogleMapComics />
      <InputAddress />

      <DialogActions>
        <Button
          onClick={async () => {
            if (address) {
              setOpenSnack(true);
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
        <Button
          onClick={toggleOpenDialogAddress}
          color="error"
          variant="outlined"
        >
          Fechar
        </Button>
      </DialogActions>
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={openSnack}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Pedido Finalizado
        </Alert>
      </Snackbar>
    </Dialog>
  );
}
