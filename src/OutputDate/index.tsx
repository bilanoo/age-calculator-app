import { Box, Typography } from "@mui/material";
import useInputDateStore from "../stores/inputDateStore.store";

const OutputDate = () => {
  const { day, month, year, ageCalculatedFlag } = useInputDateStore(
    (state) => state
  );
  return (
    <>
      <Box sx={{ marginLeft: "20px", marginRight: "auto" }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "800",
            fontStyle: "italic",
            fontSize: "70px",
          }}
        >
          <span style={{ color: "#864CFF" }}>
            {ageCalculatedFlag ? year : 38}
          </span>{" "}
          years
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "800",
            fontStyle: "italic",
            marginLeft: "20px",
            fontSize: "70px",
          }}
        >
          <span style={{ color: "#864CFF" }}>
            {ageCalculatedFlag ? month : 3}
          </span>{" "}
          months
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "800",
            fontStyle: "italic",
            marginLeft: "-60px",
            fontSize: "70px",
          }}
        >
          <span style={{ color: "#864CFF" }}>
            {ageCalculatedFlag ? day : 26}
          </span>{" "}
          days
        </Typography>
      </Box>
    </>
  );
};

export default OutputDate;
