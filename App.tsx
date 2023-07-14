import { Box } from "@mui/material";
import "./App.css";
import InputDate from "./InputDate";
import SubmitButton from "./SubmitButton";
import OutputDate from "./OutputDate";

const App = () => {
  const calculatorContainerStyles = {
    display: "flex",
    backgroundColor: "white",
    width: "40vh",
    height: "50vh",
    borderRadius: "15px 15px 100px",
    "@media only screen and (min-width: 992px)": {
      width: "70vh",
      height: "40vh",
    },
    "@media only screen and (max-width: 600px)": {
      width: "40vh",
      height: "60vh",
    },
  };
  return (
    <Box
      className="calculator-container"
      sx={calculatorContainerStyles}
      boxSizing={"border-box"}
      flexDirection={"column"}
    >
      <InputDate />
      <SubmitButton />
      <OutputDate />
    </Box>
  );
};

export default App;
