import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import RouterRoot from "./Routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import './theme/style.css';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterRoot />
      </ThemeProvider>
    </Provider>
  );
};
