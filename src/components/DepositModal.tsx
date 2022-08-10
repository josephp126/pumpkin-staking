import React, { useState } from "react";
import styled from "styled-components";
import Modal from "styled-react-modal";
import Grid from "@mui/material/Grid";

const ActiveCrossButton = {
  padding: "5px 20px",
  backgroundColor: "white",
  color: "black",
  fontSize: "15px",
  borderRadius: "10px",
  border: "none",
  fontWeight: "500",
  cursor: "pointer",
};

const DisableCrossButton = {
  padding: "5px 20px",
  backgroundColor: "rgb(230 230 230)",
  color: "#7b7b7b",
  fontSize: "15px",
  borderRadius: "10px",
  border: "none",
  fontWeight: "500",
  cursor: "pointer",
};

const StyledModal = Modal.styled`
  width: 30rem;
  height: 28rem;
  justify-content: center;
  background-color: white;
  opacity: 1;
  border-radius: 10px;
  transition : all 0.3s ease-in-out;`;

const StakeButton = styled.button`
  padding: 7px 3px;
  width: 100%;
  background-color: black;
  font-size: 14px;
  cursor: pointer;
  color: white;
  border-radius: 30px;
  margin-top: 30px;
`;

const CrossButton = styled.button`
  padding: 5px 20px;
  background-color: white;
  color: black;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  font-weight: 500;
  cursor: pointer;
`;

const DepositButton = styled.button`
  font-size: 20px;
  color: black;
  border-radius: 20px;
  padding: 10px 25px;
  border: 2px solid black;
  margin-top: 30px;
  cursor: pointer;
  background-color: rgb(230 230 230);
  &:disabled {
    color: #7b7b7b;
    cursor: not-allowed;
    border: 2px solid #b9b9b9;
  }
`;

const CrossButtonDiv = styled.div`
  width: 197px;
  border-radius: 15px;
  background-color: rgb(230 230 230);
  padding: 10px 20px;
`;

const CloseButton = styled.div`
  background: white;
  border: none;
  color: rgba(137, 146, 161);
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 30px;
  border-radius: 50%;
  margin-top: 3px;
`;

const Title = styled.div`
  font-size: 20px;
  color: black;
  text-align: center;
  font-family: var(--chakra-fonts-body);
  font-weight: bold;
  margin-left: 10px;
  margin-top: 3px;
`;

const ModalMainContent = styled.div`
  padding: 4% 10%;
`;

const GeneralFont = styled.div`
  font-size: 16px;
  color: rgba(137, 146, 161);
  margin-bottom: 10px;
`;

const Amount = styled.input`
  border: none;
  font-size: 24px;
  margin-top: 15px;
  &:active {
    border: none;
  }
`;

const MaxButton = styled.button`
  border: none;
  font-size: 14px;
  color: rgb(90, 37, 240);
  background-color: transparent;
  margin-top: 12px;
  cursor: pointer;
`;

export const DepositModal = ({
  title,
  id,
  image,
}: {
  title: string;
  id: number;
  image: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);

  const toggleModal = () => {
    setOpacity(0);
    setIsOpen(!isOpen);
  };

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  const beforeClose = () => {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  };

  const handleAmount = (e: any) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  const handleMaxValue = () => {
    setAmount(0);
    console.log(amount);
  };

  const handleDeposit = () => {
    setIsDeposit(true);
  };

  const handleWithdrawl = () => {
    setIsDeposit(false);
  };

  return (
    <div>
      <StakeButton onClick={toggleModal}>Deposit</StakeButton>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        backgroundProps={{ opacity }}
      >
        <Grid container spacing="0" sx={{ padding: "15px" }}>
          <Grid item xs={10}>
            <CrossButtonDiv>
              <CrossButton
                onClick={handleDeposit}
                style={isDeposit ? ActiveCrossButton : DisableCrossButton}
              >
                Deposit
              </CrossButton>
              <CrossButton
                onClick={handleWithdrawl}
                style={!isDeposit ? ActiveCrossButton : DisableCrossButton}
              >
                Withdrawl
              </CrossButton>
            </CrossButtonDiv>
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "right" }}>
            <CloseButton onClick={toggleModal}>x</CloseButton>
          </Grid>
        </Grid>
        <hr style={{ border: "1px solid rgb(247, 248, 250);" }}></hr>
        <ModalMainContent>
          <Grid container spacing="0" sx={{ marginBottom: "30px" }}>
            <Grid item xs={6} sx={{ textAlign: "left" }}>
              <div style={{ display: "flex" }}>
                <LogoImg src={image} />
                <Title>{title}</Title>
              </div>
              <Amount
                placeholder="0.0"
                onChange={(e) => handleAmount(e)}
                value={amount}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ textAlign: "right", paddingTop: "5px !important" }}
            >
              <GeneralFont>
                Balance: {balance > 0 ? balance : "0.0000"}
              </GeneralFont>
              <MaxButton onClick={handleMaxValue}>Max</MaxButton>
            </Grid>
          </Grid>
          <Grid
            container
            spacing="0"
            sx={{
              padding: "11px",
              background: "rgb(230 230 230)",
              borderRadius: "5px",
            }}
          >
            <Grid item xs={6}>
              <GeneralFont>Pool Share</GeneralFont>
              <GeneralFont>Base APY</GeneralFont>
              <GeneralFont>My APY</GeneralFont>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <GeneralFont>0% → 0% </GeneralFont>
              <GeneralFont>42.10%</GeneralFont>
              <GeneralFont>42.1%</GeneralFont>
            </Grid>
          </Grid>
          <div style={{ textAlign: "center" }}>
            <DepositButton disabled={balance == 0}>
              {isDeposit ? "Deposit" : "Withdrawl"}
            </DepositButton>
          </div>
        </ModalMainContent>
      </StyledModal>
    </div>
  );
};
