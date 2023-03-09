import styled from "styled-components";
import cardBackImage from "../img/bg-card-back.png";
import cardfrontImage from "../img/bg-card-front.png";

export const Divmainblue = styled.div`
  position: relative;
  width: 375px;
  height: 240px;
  background: #21092f;
  @media (min-width: 1440px) {
      width: 483px;
      height: 900px;
  }
`;

export const DivCardBack = styled.div`
  min-width: 286px;
  height: 157px;
  margin-top: 32px;
  margin-left: 73px;
  position: absolute;
  background-image: url(${cardBackImage});
  background-size: 286px 157px;

  @media (min-width: 1440px) {
    width: 447px;
  height: 245px;
  background-size: 447px 245px;
      margin-top: 469px;
      margin-left: 258px;
      
    }
`;
export const Cvc = styled.h3`
  font-size: 9px;
  margin-top: 73.64px;
  margin-left: 229px;
  color: #ffffff;
  @media (min-width: 1440px) {
    font-size: 14px;
  margin-top: 111px;
  margin-left: 358px;
  }
`;

export const DivCardFront = styled.div`
  width: 285px;
  height: 156.21px;
  margin-top: 126.4px;
  margin-left: 17px;
  position: absolute;
  background-image: url(${cardfrontImage});
  background-size: 285px 156.21px;
  @media (min-width: 1440px) {
    width: 447px;
  height: 245px;
  background-size: 447px 245px;
      
      margin-top: 187px;
      margin-left: 164px;
      
    }
`;
export const BigBall = styled.div`
  width: 30px;
  height: 30px;
  margin-top: 17.6px;
  margin-left: 19px;
  background: #ffffff;
  border-radius: 20px;
  @media (min-width: 1440px) {
    width: 46.96px;
  height: 47px;
  margin-top: 28px;
  margin-left: 32px;
  background: #ffffff;
  border-radius: 20px;
    }
`;

export const SmallBall = styled.div`
  position: absolute;
  margin-left: 59.42px;
  margin-top: -21.75px;
  width: 13.58px;
  height: 13.5px;
  border: 1px solid #ffffff;
  border-radius: 20px;
  box-sizing: border-box;
  
  @media (min-width: 1440px) {
  margin-left: 95px;
  margin-top: -34px;
  width: 21.13px;
  height: 21.15px;
 
    }
`;

export const CardNumber = styled.h2`
  font-size: 18px;
  color: #ffffff;
  margin-left: 19px;
  margin-top: 37px;
  @media (min-width: 1440px) {
  font-size: 28px;
  margin-left: 32px;
  margin-top: 64px;
  }
 
`;

export const Name = styled.h3`
  color: #ffffff;
  margin-left: 19px;
  margin-top: 17px;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  @media (min-width: 1440px) {
    font-family: 'Space Grotesk';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
letter-spacing: 2px;
text-transform: uppercase;
  margin-left: 32px;
  margin-top: 25.5px;
  }
`;

export const Date = styled(Name)`
  position: absolute;
  font-family: 'Space Grotesk';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
letter-spacing: 2px;
text-transform: uppercase;
  margin-top: -11px;
  margin-left: 232.11px;

  @media (min-width: 1440px) {
    
  margin-left: 365px;
  margin-top: -18px;
  }
`;
