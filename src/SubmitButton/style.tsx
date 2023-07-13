import { Divider, styled } from "@mui/material";

export const CustomDivider = styled(Divider)(() => ({
  "&": {
    marginTop: "40px",
    marginRight: "20px",
    marginLeft: "20px",
    position: "relative",
    overflow: "visible",
  },
}));
