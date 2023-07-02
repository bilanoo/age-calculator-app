import { Box, Grid } from "@mui/material";
import "./App.css";
import InputDate from "./InputDate";

const App = () => {
  const calculatorContainerStyles = {
    display: "flex",
    backgroundColor: "white",
    width: "40vh",
    height: "50vh",
    borderRadius: "15px 15px 100px",
  };
  return (
    <Box
      className="calculator-container"
      style={calculatorContainerStyles}
      boxSizing={"border-box"}
      flexDirection={"column"}
    >
      <InputDate />
    </Box>
  );
};

export default App;
