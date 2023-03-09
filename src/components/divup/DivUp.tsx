import React from "react";

import {
  BigBall,
  CardNumber,
  DivCardBack,
  DivCardFront,
  Divmainblue,
  Name,
  SmallBall,
  Date,
  Cvc,
} from "./divUp.styled";

const DivUp = ({ object }: any) => {
  return (
    <Divmainblue>
      <DivCardBack>
        <Cvc>{object ? object.cvc : "000"}</Cvc>
      </DivCardBack>
      <DivCardFront>
        <BigBall />
        <SmallBall />

        <CardNumber>
          {object ? object.cardnumber : "0000 0000 0000 0000"}
        </CardNumber>
        <Name>{object ? object.name : "aleksandre"}</Name>
        <Date>{object ? object.day + "/" + object.month : "00/00"}</Date>
      </DivCardFront>
    </Divmainblue>
  );
};

export default DivUp;
