import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
  },
});
