import { Container } from "@mui/material";
import IconArrow from "../../assets/images/icon-arrow.svg";
import { CustomDivider } from "./style";

const SubmitButton = () => {
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
          >
            <img src={IconArrow} alt="icon-arrow" style={{ width: "30px" }} />
          </button>
        </CustomDivider>
      </Container>
    </>
  );
};

export default SubmitButton;
