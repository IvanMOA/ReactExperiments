import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core";
import theme from "../theme/theme";
import { ModalProvider } from "../components/Modal/ModalContext";
import "../styles/normalize.css";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ThemeProvider>
  );
};

export default MyApp;
