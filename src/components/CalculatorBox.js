import { Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { Box, styled } from "@mui/system";
import React, { forwardRef } from "react";
import SquareButton from "./SquareButton";

const StyledSquareButton = styled(SquareButton)({});

const CalculatorBox = forwardRef((props, ref) => {
  const { className } = props;
  return (
    //   root box
    <Box
      ref={ref}
      className={className}
      sx={{
        borderRadius: "10px",
        backgroundColor: grey["800"],
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      {/* result box */}
      <Box
        sx={{
          minHeight: "50px",
          backgroundColor: "hsl(0, 0%, 30%)",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "flex-end",
          padding: "0.5em",
        }}
      >
        <Typography variant="h6" color="white" sx={{ fontSize: "3.5rem" }}>
          {"0"}
        </Typography>
      </Box>
      {/* buttons box */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.5em",
        }}
      >
        <>
          {[
            "C",
            "+-",
            "%",
            "<=",
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "X",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((button, index) => {
            if (button === "=") {
              return (
                <StyledSquareButton
                  sx={{
                    backgroundColor: red["A200"],
                    "&:hover": {
                      backgroundColor: red["A100"],
                    },
                  }}
                >
                  {"="}
                </StyledSquareButton>
              );
            }
            return (
              <StyledSquareButton key={index}>{button}</StyledSquareButton>
            );
          })}
        </>
      </Box>
    </Box>
  );
});
export default CalculatorBox;
