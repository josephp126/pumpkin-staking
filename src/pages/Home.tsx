import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LandingBtn = styled.button`
  padding: 15px 30px;
  background-color: white;
  border: 4px solid black;
  font-size: 24px;
  box-shadow: 7px 7px 7px grey;
  cursor: pointer;
`;

const LandingStructure = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh);
`;

const Home = () => {
  const history = useNavigate();

  const moveStaking = (e: any) => {
    e.preventDefault();
    history("/staking");
  };

  return (
    <LandingStructure>
      <LandingBtn onClick={moveStaking}>Start Staking</LandingBtn>
    </LandingStructure>
  );
};

export default Home;
