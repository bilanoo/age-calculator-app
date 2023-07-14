import { Divider, styled } from "@mui/material";

export const CustomDivider = styled(Divider)(() => ({
  "&": {
    marginTop: "40px",
    marginRight: "20px",
    marginLeft: "20px",
    position: "relative",
    overflow: "visible",
  },
  ".MuiDivider-wrapper": {
    "@media only screen and (min-width: 992px)": {
      position: "absolute",
      marginLeft: "auto",
      marginRight: "0px",
      right: "-10px",
      top: "-40px",
    },
  },
}));
