import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import WalletLogin from "../components/WalletLogin/WalletLogin";

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
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
