import React from 'react';

import { useNavigate } from 'react-router-dom';

import Q11Image from './assets/images/1.png';

import Q21Image from './assets/images/2.png';

import Q31Image from './assets/images/3.png';

import Q71Image from './assets/images/71.png';

import {
  styled
} from '@mui/material/styles';

const LogIn1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1920px`,
  height: `1080px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Rectangle1 = styled("div")({
  backgroundColor: `rgba(152, 193, 217, 1)`,
  width: `1920px`,
  height: `58px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q11 = styled("img")({
  height: `24px`,
  width: `24px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `764px`,
  top: `17px`,
});

const IntroducingAiAssist = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `168px`,
  height: `18px`,
  position: `absolute`,
  left: `788px`,
  top: `20px`,
});

const Products = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `138px`,
  height: `18px`,
  position: `absolute`,
  left: `356px`,
  top: `98px`,
});

const Services = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `138px`,
  height: `18px`,
  position: `absolute`,
  left: `474px`,
  top: `98px`,
});

const Customers = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `138px`,
  height: `18px`,
  position: `absolute`,
  left: `605px`,
  top: `98px`,
});

const Partners = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `138px`,
  height: `18px`,
  position: `absolute`,
  left: `734px`,
  top: `98px`,
});

const Resources = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `138px`,
  height: `18px`,
  position: `absolute`,
  left: `862px`,
  top: `98px`,
});

const WhyFree = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `138px`,
  height: `18px`,
  position: `absolute`,
  left: `999px`,
  top: `98px`,
});

const English = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `75px`,
  height: `18px`,
  position: `absolute`,
  left: `1167px`,
  top: `98px`,
});

const HarnessThePowerOfAi = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `underline`,
  textTransform: `none`,
  width: `201px`,
  height: `18px`,
  position: `absolute`,
  left: `956px`,
  top: `20px`,
});

const Q21 = styled("img")({
  height: `116px`,
  width: `126px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `186px`,
  top: `58px`,
});

const Q31 = styled("img")({
  height: `21px`,
  width: `33px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1140px`,
  top: `103px`,
});

const Rectangle2 = styled("div")({
  backgroundColor: `rgba(224, 251, 252, 1)`,
  borderRadius: `11px`,
  width: `100px`,
  height: `38px`,
  position: `absolute`,
  left: `1409px`,
  top: `94px`,
});

const Rectangle3 = styled("div")({
  backgroundColor: `rgba(61, 90, 128, 1)`,
  borderRadius: `11px`,
  width: `159px`,
  height: `38px`,
  position: `absolute`,
  left: `1531px`,
  top: `94px`,
});

const LogIn2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `75px`,
  height: `18px`,
  position: `absolute`,
  left: `1421px`,
  top: `98px`,
});

const SignUpFree = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `129px`,
  height: `26px`,
  position: `absolute`,
  left: `1546px`,
  top: `98px`,
});

const Q71 = styled("img")({
  height: `858px`,
  width: `909px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `119px`,
  top: `173px`,
});

const LogInToChat8 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `64px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `525px`,
  height: `88px`,
  position: `absolute`,
  left: `1146px`,
  top: `266px`,
});

const Rectangle21 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 0)`,
  border: `1px solid rgba(105, 105, 105, 1)`,
  boxSizing: `border-box`,
  width: `694px`,
  height: `74px`,
  position: `absolute`,
  left: `1074px`,
  top: `406px`,
});

const Rectangle23 = styled("div")({
  backgroundColor: `rgba(61, 90, 128, 1)`,
  borderRadius: `34px`,
  width: `694px`,
  height: `98px`,
  position: `absolute`,
  left: `1075px`,
  top: `629px`,
});

const Rectangle22 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 0)`,
  border: `1px solid rgba(105, 105, 105, 1)`,
  boxSizing: `border-box`,
  width: `694px`,
  height: `73px`,
  position: `absolute`,
  left: `1074px`,
  top: `507px`,
});

const Group35 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `186px`,
  height: `25px`,
  left: `1193px`,
  top: `767px`,
});

const Rectangle24 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 0)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `25px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const RememberMe = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `146px`,
  height: `13px`,
  position: `absolute`,
  left: `40px`,
  top: `2px`,
});

const ForgotPassword = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(61, 90, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `128px`,
  height: `13px`,
  position: `absolute`,
  left: `1521px`,
  top: `767px`,
});

const Group36 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `366px`,
  height: `23px`,
  left: `1244px`,
  top: `828px`,
});

const DonTHaveAnAccount = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `182px`,
  height: `23px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const CreateFreeAccount = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(61, 90, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `underline`,
  textTransform: `none`,
  width: `182px`,
  height: `23px`,
  position: `absolute`,
  left: `184px`,
  top: `0px`,
});

const SignIn = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `495px`,
  height: `48px`,
  position: `absolute`,
  left: `1173px`,
  top: `647px`,
});

const Username = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(105, 105, 105, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `200`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `495px`,
  height: `36px`,
  position: `absolute`,
  left: `1101px`,
  top: `415px`,
});

const Password = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(105, 105, 105, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `200`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `495px`,
  height: `36px`,
  position: `absolute`,
  left: `1101px`,
  top: `515px`,
});


function LogIn() {
  const navigate = useNavigate();


  // Function to handle the click event on the Q11 image
  const handleQ11Click = () => {
    // Add any additional logic here if needed
    // Navigate to the LandingPage when the image is clicked
    navigate('/');
  };

  const handleProductsClick = () => {
    navigate('/contacts');
  };

  return (
    <LogIn1>
      <Rectangle1>
      </Rectangle1>
      <Q11 src={Q11Image} loading='lazy' alt={"1 1"} />
      <IntroducingAiAssist>
        {`Introducing AI Assist!`}
      </IntroducingAiAssist>
      <Products onClick={handleProductsClick}>
        {`Products`}
      </Products>
      <Services>
        {`Services`}
      </Services>
      <Customers>
        {`Customers`}
      </Customers>
      <Partners>
        {`Partners`}
      </Partners>
      <Resources>
        {`Resources`}
      </Resources>
      <WhyFree>
        {`Why Free?`}
      </WhyFree>
      <English>
        {`English`}
      </English>
      <HarnessThePowerOfAi>
        {`Harness the power of AI!`}
      </HarnessThePowerOfAi>
      <Q21 src={Q21Image} loading='lazy' alt={"2 1"} onClick={handleQ11Click} />
      <Q31 src={Q31Image} loading='lazy' alt={"3 1"}/>
      <Rectangle2>
      </Rectangle2>
      <Rectangle3>
      </Rectangle3>
      <LogIn2>
        {`Log in`}
      </LogIn2>
      <SignUpFree>
        {`Sign up Free`}
      </SignUpFree>
      <Q71 src={Q71Image} loading='lazy' alt={"71"}/>
      <LogInToChat8>
        {`Log in to CHAT8`}
      </LogInToChat8>
      <Rectangle21>
      </Rectangle21>
      <Rectangle23>
      </Rectangle23>
      <Rectangle22>
      </Rectangle22>
      <Group35>
        <Rectangle24>
        </Rectangle24>
        <RememberMe>
          {`Remember Me`}
        </RememberMe>
      </Group35>
      <ForgotPassword>
        {`Forgot Password`}
      </ForgotPassword>
      <Group36>
        <DonTHaveAnAccount>
          {`Don't have an account?`}
        </DonTHaveAnAccount>
        <CreateFreeAccount>
          {`Create free account!`}
        </CreateFreeAccount>
      </Group36>
      <SignIn>
        {`SIGN IN`}
      </SignIn>
      <Username>
        {`Username`}
      </Username>
      <Password>
        {`Password`}
      </Password>
    </LogIn1>);

  }

export default LogIn;