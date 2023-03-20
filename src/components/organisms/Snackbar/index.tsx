import { forwardRef, SetStateAction, Dispatch } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Snackbar as SnackElement } from "@mui/material";

const AlertRef = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface SnackbarProps {
  open: boolean;
  message?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  severity?: AlertProps["severity"];
}

export const Snackbar = ({
  open = true,
  setOpen,
  message = "Ação realizada com sucesso",
  severity = "success",
}: SnackbarProps) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <SnackElement open={open} autoHideDuration={6000} onClose={handleClose}>
      <AlertRef
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </AlertRef>
    </SnackElement>
  );
};
