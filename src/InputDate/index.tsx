import { Grid, TextField } from "@mui/material";
import { TextInputField } from "./style";

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
          <TextInputField>DAY</TextInputField>
          <TextField type="text"></TextField>
        </Grid>
        <Grid item className="input-date-day" style={inputDayDateStyle}>
          <TextInputField textAlign={"start"}>MONTH</TextInputField>
          <TextField type="text"></TextField>
        </Grid>
        <Grid item className="input-date-day" style={inputDayDateStyle}>
          <TextInputField textAlign={"start"}>YEAR</TextInputField>
          <TextField type="text"></TextField>
        </Grid>
      </Grid>
    </>
  );
};

export default InputDate;
