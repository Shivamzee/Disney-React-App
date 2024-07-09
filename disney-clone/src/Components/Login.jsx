import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/Images/cta-logo-one.svg" alt="CTA logo" />
          <SignUp>Get It All There</SignUp>
          <Description>
            "Never stop fighting until you arrive at your destined place - the
            unique you. Have an aim in life, continuously acquire knowledge,
            work hard, and have perseverance to realise the great life." -Dr.
            APJ Abdul Kalam || 10/07/2024
          </Description>
          <CTALogoTwo src="/Images/cta-logo-two.png" alt="Logo below desc" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  width: 100%;
  padding: 80px 40px;
  margin-bottom: 10vh;
  height: 100%;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/Images/backgroundLogin.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 650px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const CTALogoTwo = styled.img`
  max-width: 650px;
  margin-bottom: 20px;
  vertical-align: bottom;
  display: inline-block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  font-size: 18px;
  padding: 16px 0;
  border-radius: 4px;
  border: 1px solid transparent;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  line-height: 1.5;
  margin: 0 0 24px;
  letter-spacing: 1px;
`;

export default Login;
