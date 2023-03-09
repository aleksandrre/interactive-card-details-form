import React from "react";
import SubmitIcon from "../img/icon-complete.svg";
import {
  Buttonsubmited,
  DivelElementRightSubmited,
  DivSubmitedIcon,
  Hsubmited,
  Psubmited,
} from "./submited.styled";

const Submited = ({ setNosubmited, nosubmited, setObject }) => {
  return (
    <DivelElementRightSubmited>
      <DivSubmitedIcon>
        <img src={SubmitIcon} />
      </DivSubmitedIcon>
      <Hsubmited>THANK YOU!</Hsubmited>
      <Psubmited>We've added your card details</Psubmited>
      <Buttonsubmited
        onClick={() => {
          setObject(undefined);
          setNosubmited(!nosubmited);
        }}
      >
        Continue
      </Buttonsubmited>
    </DivelElementRightSubmited>
  );
};

export default Submited;
