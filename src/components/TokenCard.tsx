import { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { ModalProvider, BaseModalBackground } from "styled-react-modal";
import { DepositModal } from "./DepositModal";

interface CardType {
  title: string;
  image: string;
  id: number;
}

const Title = styled.div`
  font-size: 24px;
  color: black;
  text-align: center;
  font-family: var(--chakra-fonts-body);
  font-weight: bold;
`;

const CardLayout = styled.div`
  background-color: white;
  padding: 40px 30px;
  border-radius: 7px;
`;

const Total = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 34px;
  font-weight: bold;
`;

const StakeControl1 = styled.div`
  padding-top: 30px;
  display: flex;
  color: rgb(137, 146, 161);
  font-family: var(--chakra-fonts-body);
  font-size: 14px;
`;

const StakeControl2 = styled(StakeControl1)``;
const StakeControl3 = styled(StakeControl1)``;

const LogoImg = styled.img`
  width: 30px;
  border-radius: 50%;
  margin-top: 3px;
`;

const SingleMark = styled.p`
  margin-top: 3px;
  margin-bottom: 0px;
  background: black;
  margin-right: -30px;
  margin-left: 60%;
  color: white;
  padding: 1px 5px 3px 3px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  font-family: Manrope;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;

const FadingBackground = styled(BaseModalBackground)`
  opacity: 1;
  transition: all 1.5s ease-in-out;
  align-items: normal;
  padding-top: 80px;
`;

export const TokenCard = ({ title, image, id }: CardType) => {
  const account = "";
  const [inputValue, setInputValue] = useState(0);
  const allowance = 0;
  const usehandleClaim = async () => {
    return;
  };
  function handleInput(event: any) {
    setInputValue(event.target.value);
  }
  const usehandleUnstake = async () => {
    return;
  };
  const usehandleApprove = async () => {
    return;
  };

  const usehandleStake = async () => {
    return;
  };
  return (
    // <ModalProvider backgroundComponent={FadingBackground}>
    //   <CardLayout>
    //     <Grid container spacing={0}>
    //       <Grid item xs={4}>
    //         <LogoImg src={image} />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <Title>{title}</Title>
    //       </Grid>
    //       <Grid item xs={4} sx={{ textAlign: "right", paddingRight: "-15px" }}>
    //         <SingleMark>single</SingleMark>
    //       </Grid>
    //     </Grid>
    //     <Total>{20} %</Total>
    //     <StakeControl1>
    //       <Grid container spacing={0}>
    //         <Grid item xs={8}>
    //           Reward Token
    //         </Grid>
    //         <Grid item xs={4} sx={{ textAlign: "right" }}>
    //           -
    //         </Grid>
    //       </Grid>
    //     </StakeControl1>
    //     <StakeControl2>
    //       <Grid container spacing={0}>
    //         <Grid item xs={8}>
    //           My Staked
    //         </Grid>
    //         <Grid item xs={4} sx={{ textAlign: "right" }}>
    //           -
    //         </Grid>
    //       </Grid>
    //     </StakeControl2>
    //     <StakeControl3>
    //       <Grid container spacing={0}>
    //         <Grid item xs={8}>
    //           My reward
    //         </Grid>
    //         <Grid item xs={4} sx={{ textAlign: "right" }}>
    //           -
    //         </Grid>
    //       </Grid>
    //     </StakeControl3>
    //     <DepositModal title={title} id={id} image={image} />
    //   </CardLayout>
    // </ModalProvider>
    <div className="cardContainer stakeNftCard">
      <div className="stakeCardHeader">
        <div className="stakingCardText">Stake</div>
        <img src={image} className="stakingCardImg" alt="Stake Icon" />
      </div>
      <div className="nftCardBody">
        <div className="dataItem">
          <div className="dataItemHeader">Earn:</div>
          <div className="dataItemVal">{title}</div>
        </div>
        <div className="dataItem">
          <div className="dataItemHeader">Locking Period:</div>
          <div className="dataItemVal">15 days</div>
        </div>
        <div className="dataItem">
          <div className="dataItemHeader">APY:</div>
          <div className="dataItemVal">{14.71} %</div>
        </div>
        <div className="dataItem">
          <div className="dataItemHeader">Staked:</div>
          <div className="dataItemVal">{0}</div>
        </div>
        <div className="claimRewardsCntr">
          <div className="claimRewardsData">
            <div className="claimRewardsHeader">{title} Earned</div>
            <div className="claimRewardsValue">{0}</div>
          </div>
          <div className="claimBtnCntr">
            {account ? (
              <div className="btn claim" onClick={usehandleClaim}>
                Claim
              </div>
            ) : (
              <div className="btn claim">Claim</div>
            )}
          </div>
        </div>
        <div className="stakeInputCntr">
          <input
            className="stakeInput"
            value={inputValue}
            onChange={handleInput}
            placeholder="Enter Amount"
          ></input>
        </div>
        <div className={"stakeBtnCntr"}>
          {allowance > inputValue ? (
            <div className="btn claim" onClick={usehandleStake}>
              Stake
            </div>
          ) : account ? (
            <div className="btn claim" onClick={usehandleApprove}>
              Approve
            </div>
          ) : (
            <div className="btn claim">Approve</div>
          )}
          {account ? (
            <div className="btn claim" onClick={usehandleUnstake}>
              Unstake
            </div>
          ) : (
            <div className="btn claim">Unstake</div>
          )}
        </div>
      </div>
    </div>
  );
};
