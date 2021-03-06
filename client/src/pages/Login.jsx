import React, { useEffect, useContext } from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import WalletLogin from "../components/WalletLogin/WalletLogin";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 0%;
`;

const Login = () => {
  const navigate = useNavigate();
  const { address } = useContext(Context);

  useEffect(() => {
    if (address !== "") {
      navigate(`/account/${address}`);
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(35, 39, 40)",
        height: "100vh",
      }}
    >
      <Navigation />
      <Container>
        <Main>
          <WalletLogin />
        </Main>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
