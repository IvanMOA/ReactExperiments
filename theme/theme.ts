import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#25A18E",
    },
    secondary: {
      main: "#011627",
    },
    background: {
      paper: "#FDFFFC",
    },
  },
  typography: {
    fontFamily: "Josefin Sans, sans-serif",
  },
});

export default theme;
