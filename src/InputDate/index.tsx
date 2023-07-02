import { Grid, TextField, Typography } from "@mui/material";

const InputDate = () => {
  const inputDateContainer = {
    width: "90%",
    marginTop: "50px",
    marginLeft: "20px",
    marginRight: "40px",
    columnGap: "10px",
  };

  const inputDayDateStyle = {
    width: "30%",
  };
  return (
    <>
      <Grid
        container
        className="input-date-container"
        style={inputDateContainer}
      >
        <Grid item className="input-date-day" style={inputDayDateStyle}>
          <Typography>DAY</Typography>
          <TextField type="text"></TextField>
        </Grid>
        <Grid item className="input-date-day" style={inputDayDateStyle}>
          <Typography>MONTH</Typography>
          <TextField type="text"></TextField>
        </Grid>
        <Grid item className="input-date-day" style={inputDayDateStyle}>
          <Typography>YEAR</Typography>
          <TextField type="text"></TextField>
        </Grid>
      </Grid>
    </>
  );
};

export default InputDate;
