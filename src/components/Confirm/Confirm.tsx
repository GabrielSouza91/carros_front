import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { ConfirmProps } from "../../types/confirm";

export function Confirm({ onClose, onConfirm, open, title }: ConfirmProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {title || "Tem certeza que deseja excluir?"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>Não</Button>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
}
