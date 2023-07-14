import { Typography, styled } from "@mui/material";

export const TextInputField = styled(Typography)(() => ({
  "&": {
    textAlign: "start",
    fontWeight: "bold",
    fontSize: "15px",
    letterSpacing: "3px",
  },
}));
