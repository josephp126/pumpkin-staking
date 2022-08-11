import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { datas } from "../stakingDatas";
import { TokenCard } from "../components/TokenCard";
import { Sidebar } from "../components/Sidebar";
import BackImage from "../assets/images/staking_back.png";
import BackDarkImage from "../assets/images/staking_dark_back.png";
import "../index.css";

const StakingLayout = styled.div`
  background-attachment: fixed !important;
  background-size: cover !important;
  padding: 80px 3% !important;
  @media (min-width: 900px) {
    padding: 50px 3%; !important
  }
`;

const Redirect = styled.a`
  background-color: white;
  border: 4px solid black;
  border-radius: 20px;
  text-decoration: none;
  float: right;
  padding: 6px 12px;
  color: black;
  font-size: 22px;
  margin-top: 40px;
  margin-bottom: 30px;
  &:hover {
    background-color: #ebe35d;
  }
`;

const HeaderBtn = styled.div`
  text-align: right;
  margin-bottom: 50px;
`;

const NetBtn = styled.button`
  background-color: white;
  color: rgb(90, 37, 240);
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;

const ConnectWallet = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 10px 13px;
  border-radius: 5px;
  margin-left: 10px;
  border: none;
  box-shadow: 1px 1px 1px black;
  cursor: pointer;
`;

const Staking = () => {
  const [isDark, setIsDark] = useState(false);

  const handleDark = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  return (
    <>
      {/* <Sidebar /> */}
      <StakingLayout
        style={{
          background: isDark
            ? `url(${BackDarkImage}) no-repeat center center`
            : `url(${BackImage}) no-repeat center center`,
        }}
      >
        <HeaderBtn>
          <ConnectWallet onClick={handleDark}>
            {!isDark ? "Dark" : "Light"}
          </ConnectWallet>
          <ConnectWallet>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </ConnectWallet>
          <ConnectWallet>CONNECT</ConnectWallet>
        </HeaderBtn>
        <Grid container spacing="50">
          {datas.map(({ title, ...id }) => (
            <Grid key={title} item xs={12} md={4} lg={3}>
              <TokenCard key={title} title={title} {...id} />
            </Grid>
          ))}
        </Grid>
        {/* <Redirect href="/">Back to Directory</Redirect> */}
      </StakingLayout>
    </>
  );
};

export default Staking;
