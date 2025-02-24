import "./App.css";
import Pages from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { BaseTheme } from "./theme/base";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";


function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <AuthProvider>
      <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;