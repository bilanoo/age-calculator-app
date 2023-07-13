import { Grid, TextField } from "@mui/material";
import { TextInputField } from "./style";
import useInputDateStore from "../stores/inputDateStore.store";

const InputDate = () => {
  const { day, month, year, setDay, setMonth, setYear } = useInputDateStore(
    (state) => state
  );
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
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    event.preventDefault();
    if (event.currentTarget.id === "day-input-field") {
      setDay(event.currentTarget.value);
    } else if (event.currentTarget.id === "month-input-field") {
      setMonth(event.currentTarget.value);
    } else {
      setYear(event.currentTarget.value);
    }
  }

  console.log(day);
  return (
    <>
      <Grid
        container
        className="input-date-container"
        style={inputDateContainer}
      >
        <Grid item className="input-date-day" style={inputDayDateStyle}>
          <TextInputField>DAY</TextInputField>
          <TextField
            type="text"
            onChange={handleChange}
            value={day}
            id="day-input-field"
          ></TextField>
        </Grid>
        <Grid item className="input-date-day" style={inputDayDateStyle}>
          <TextInputField textAlign={"start"}>MONTH</TextInputField>
          <TextField
            type="text"
            onChange={handleChange}
            value={month}
            id="month-input-field"
          ></TextField>
        </Grid>
        <Grid item className="input-date-day" style={inputDayDateStyle}>
          <TextInputField textAlign={"start"}>YEAR</TextInputField>
          <TextField
            type="text"
            onChange={handleChange}
            value={year}
            id="year-input-field"
          ></TextField>
        </Grid>
      </Grid>
    </>
  );
};

export default InputDate;
