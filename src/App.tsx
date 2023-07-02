import { Grid } from "@mui/material";
import "./App.css";

const App = () => {
  const calculatorContainerStyles = {
    backgroundColor: "white",
    width: "40vh",
    height: "50vh",
    borderRadius: "15px 15px 100px",
  };
  return (
    <Grid
      container
      className="calculator-container"
      style={calculatorContainerStyles}
    >
      Hi
    </Grid>
  );
};

export default App;
