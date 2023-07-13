import { Box, Typography } from "@mui/material";

const OutputDate = () => {
  return (
    <>
      <Box sx={{ marginLeft: "20px", marginRight: "auto" }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "800",
            fontStyle: "italic",
          }}
        >
          <span style={{ color: "#864CFF" }}>38</span> years
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "800",
            fontStyle: "italic",
            marginLeft: "20px",
          }}
        >
          <span style={{ color: "#864CFF" }}>3</span> months
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "800",
            fontStyle: "italic",
            marginLeft: "-60px",
          }}
        >
          <span style={{ color: "#864CFF" }}>26</span> days
        </Typography>
      </Box>
    </>
  );
};

export default OutputDate;
