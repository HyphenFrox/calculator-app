import "./App.scss";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { deepOrange, red, teal } from "@mui/material/colors";
import { Box, styled } from "@mui/system";
import React from "react";
import CalculatorBox from "./components/CalculatorBox";

const appTheme = createTheme({
  palette: {
    primary: {
      main: teal["A200"],
    },
    secondary: {
      main: deepOrange["A200"],
    },
    background: {
      default: red["A100"],
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
});

const StyledCalculatorBox = styled(CalculatorBox)({});

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline></CssBaseline>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StyledCalculatorBox
          sx={{
            margin: "auto",
            width: {
              xs: "100%",
              sm: "350px",
            },
          }}
        ></StyledCalculatorBox>
      </Box>
    </ThemeProvider>
  );
};

export default App;
