import { Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { Box } from "@mui/system";
import classNames from "classnames";
import React, { forwardRef } from "react";

//
import useResponsiveSquare from "../utilities/useResponsiveSquare";
//

const OperationButton = forwardRef((props, ref) => {
  const { children: ButtonText, className } = props;
  const responsiveSquare = useResponsiveSquare();

  return (
    <Box
      ref={ref}
      className={classNames(className, responsiveSquare.square)}
      sx={{
        borderRadius: "10px",
        backgroundColor: lightBlue["A700"],
        "&:hover": {
          cursor: "pointer",
          backgroundColor: lightBlue["A400"],
        },
        padding: "0.75em",
      }}
    >
      <Box
        className={responsiveSquare.content}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          color="black"
          sx={{ fontSize: "1.75rem" }}
        >
          {ButtonText}
        </Typography>
      </Box>
    </Box>
  );
});
export default OperationButton;
