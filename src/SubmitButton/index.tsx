import { Container } from "@mui/material";
import IconArrow from "../../assets/images/icon-arrow.svg";
import { CustomDivider } from "./style";
import useInputDateStore from "../stores/inputDateStore.store";

const SubmitButton = () => {
  const { day, month, year, setDay, setMonth, setYear, setAgeCalculatedFlag } =
    useInputDateStore((state) => state);
  const dayGiven = Number.parseInt(day);
  const monthGiven = Number.parseInt(month);
  const yearGiven = Number.parseInt(year);

  function calculateAge(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();

    const inputDate = new Date(yearGiven, monthGiven - 1, dayGiven);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - inputDate.getTime();

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerMonth = 30 * millisecondsPerDay;
    const millisecondsPerYear = 365 * millisecondsPerDay;

    const years = Math.floor(timeDifference / millisecondsPerYear);
    const months = Math.floor(
      (timeDifference % millisecondsPerYear) / millisecondsPerMonth
    );
    const days = Math.floor(
      ((timeDifference % millisecondsPerYear) % millisecondsPerMonth) /
        millisecondsPerDay
    );

    setDay(days.toString());
    setMonth(months.toString());
    setYear(years.toString());
    setAgeCalculatedFlag(true);
    console.log(`Years: ${years}, Months: ${months}, Days: ${days}`);
  }

  return (
    <>
      <Container>
        <CustomDivider className="divider">
          <button
            style={{
              border: "none",
              cursor: "pointer",
              backgroundColor: "#864CFF",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
            }}
            onClick={calculateAge}
          >
            <img src={IconArrow} alt="icon-arrow" style={{ width: "30px" }} />
          </button>
        </CustomDivider>
      </Container>
    </>
  );
};

export default SubmitButton;
