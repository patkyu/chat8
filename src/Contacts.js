import React from 'react';

import { useNavigate } from 'react-router-dom';

import Q11Image from './assets/images/1.png';

import Q21Image from './assets/images/2.png';

import Q31Image from './assets/images/3.png';

import Q51Image from './assets/images/5.png';

import Q721Image from './assets/images/72.png';

import Ellipse1Image from './assets/images/ellipse.png';

import Ellipse2Image from './assets/images/ellipse.png';

import Q61Image from './assets/images/6.png';

import Q7Image from './assets/images/7.png';

import Q8Image from './assets/images/8.png';

import Q9Image from './assets/images/9.png';

import Q71Image from './assets/images/71.png';

import Q731Image from './assets/images/73.png';

import Q741Image from './assets/images/74.png';

import Q751Image from './assets/images/75.png';

import Q761Image from './assets/images/76.png';

import Q771Image from './assets/images/77.png';

import Q701Image from './assets/images/70.png';

import Q703Image from './assets/images/70.png';

import Q702Image from './assets/images/70.png';

import Q52Image from './assets/images/5.png';

import Q18Image from './assets/images/1.png';

import {
  styled
} from '@mui/material/styles';

const Contacts1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1920px`,
  height: `6449px`,
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

const LogIn = styled("div")({
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

const TrackUnlimitedLeadsC = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150.49999952316284%`,
  textTransform: `none`,
  width: `699px`,
  height: `116px`,
  position: `absolute`,
  left: `186px`,
  top: `583px`,
});

const Rectangle4 = styled("div")({
  backgroundColor: `rgba(61, 90, 128, 1)`,
  borderRadius: `11px`,
  width: `331px`,
  height: `91px`,
  position: `absolute`,
  left: `190px`,
  top: `739px`,
});

const SignUpFree1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `154px`,
  height: `31px`,
  position: `absolute`,
  left: `302px`,
  top: `769px`,
});

const Q51 = styled("img")({
  height: `43px`,
  width: `38px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `256px`,
  top: `763px`,
});

const Rectangle5 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(12, 26, 44, 1)`,
  boxSizing: `border-box`,
  borderRadius: `11px`,
  width: `331px`,
  height: `91px`,
  position: `absolute`,
  left: `554px`,
  top: `739px`,
});

const ScheduleACall = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(12, 26, 44, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `202px`,
  height: `31px`,
  position: `absolute`,
  left: `642px`,
  top: `769px`,
});

const Q721 = styled("img")({
  height: `43px`,
  width: `43px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `595px`,
  top: `763px`,
});

const Group37 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `266px`,
  height: `18px`,
  left: `190px`,
  top: `870px`,
});

const EasySetUp = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `86px`,
  height: `18px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const FreeForever = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `92px`,
  height: `18px`,
  position: `absolute`,
  left: `104px`,
  top: `0px`,
});

const Secure = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `52px`,
  height: `18px`,
  position: `absolute`,
  left: `214px`,
  top: `0px`,
});

const Ellipse1 = styled("img")({
  height: `6px`,
  width: `6px`,
  position: `absolute`,
  left: `92px`,
  top: `9px`,
});

const Ellipse2 = styled("img")({
  height: `6px`,
  width: `6px`,
  position: `absolute`,
  left: `202px`,
  top: `9px`,
});

const AddContextToConversa = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `64px`,
  letterSpacing: `-2.24px`,
  textDecoration: `none`,
  lineHeight: `104.99999523162842%`,
  textTransform: `none`,
  width: `705px`,
  height: `206px`,
  position: `absolute`,
  left: `188px`,
  top: `334px`,
});

const Q61 = styled("img")({
  height: `852px`,
  width: `1924px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `1080px`,
});

const Q7 = styled("img")({
  height: `359px`,
  width: `487px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `204px`,
  top: `1294px`,
});

const Q8 = styled("img")({
  height: `359px`,
  width: `452px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `734px`,
  top: `1294px`,
});

const Q9 = styled("img")({
  height: `359px`,
  width: `452px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1264px`,
  top: `1294px`,
});

const BuiltIntoYourDashboa = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(129, 129, 129, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `452px`,
  height: `18px`,
  position: `absolute`,
  left: `221px`,
  top: `1671px`,
});

const AddManageAndTrackUnl = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(129, 129, 129, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `452px`,
  height: `18px`,
  position: `absolute`,
  left: `734px`,
  top: `1671px`,
});

const SkipTheLearningCurve = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(129, 129, 129, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `452px`,
  height: `18px`,
  position: `absolute`,
  left: `1264px`,
  top: `1671px`,
});

const EasyNoCodeSetup = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `389px`,
  height: `34px`,
  position: `absolute`,
  left: `253px`,
  top: `1618px`,
});

const EmpowerYourTeam = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `351px`,
  height: `34px`,
  position: `absolute`,
  left: `1314px`,
  top: `1618px`,
});

const AddUnlimitedContacts = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `426px`,
  height: `34px`,
  position: `absolute`,
  left: `747px`,
  top: `1619px`,
});

const ContactsLetsYouManag = styled("div")({
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
  width: `1242px`,
  height: `18px`,
  position: `absolute`,
  left: `339px`,
  top: `1254px`,
});

const NeverLetALeadGoCold = styled("div")({
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
  width: `777px`,
  height: `88px`,
  position: `absolute`,
  left: `572px`,
  top: `1143px`,
});

const SeeTheDataThatMatter = styled("div")({
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
  width: `1476px`,
  height: `88px`,
  position: `absolute`,
  left: `222px`,
  top: `1939px`,
});

const Q71 = styled("img")({
  height: `858px`,
  width: `909px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `931px`,
  top: `172px`,
});

const CreateSegmentsAndCusSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
});

const CreateSegmentsAndCusSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(238, 108, 77, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
});

const CreateSegmentsAndCus = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
  width: `535px`,
  height: `120px`,
  position: `absolute`,
  left: `253px`,
  top: `2159px`,
});

const CustomizeYourContact = styled("div")({
  textAlign: `left`,
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
  width: `751px`,
  height: `60px`,
  position: `absolute`,
  left: `253px`,
  top: `2314px`,
});

const QualifyLeadsSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
});

const QualifyLeadsSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(61, 90, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
});

const QualifyLeads = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
  width: `535px`,
  height: `120px`,
  position: `absolute`,
  left: `914px`,
  top: `2701px`,
});

const ViewTagAndContinueCo = styled("div")({
  textAlign: `left`,
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
  width: `751px`,
  height: `60px`,
  position: `absolute`,
  left: `914px`,
  top: `2786px`,
});

const ImportEasilySpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
});

const ImportEasilySpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(61, 90, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
});

const ImportEasily = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
  width: `535px`,
  height: `120px`,
  position: `absolute`,
  left: `914px`,
  top: `3727px`,
});

const ViewTagAndContinueCo1 = styled("div")({
  textAlign: `left`,
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
  width: `751px`,
  height: `60px`,
  position: `absolute`,
  left: `914px`,
  top: `3812px`,
});

const Group38 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `751px`,
  height: `543px`,
  left: `190px`,
  top: `4284px`,
});

const SeeTheBigPicture = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
  width: `535px`,
  height: `85px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const HavingAllOfYourEmail = styled("div")({
  textAlign: `left`,
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
  width: `751px`,
  height: `60px`,
  position: `absolute`,
  left: `0px`,
  top: `85px`,
});

const SaveTimeAndStreamlin = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
  width: `619px`,
  height: `85px`,
  position: `absolute`,
  left: `0px`,
  top: `199px`,
});

const EnterContactDetailsD = styled("div")({
  textAlign: `left`,
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
  width: `751px`,
  height: `60px`,
  position: `absolute`,
  left: `0px`,
  top: `284px`,
});

const Q247365Support = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
  width: `619px`,
  height: `85px`,
  position: `absolute`,
  left: `0px`,
  top: `398px`,
});

const OurFriendlyAndHelpfu = styled("div")({
  textAlign: `left`,
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
  width: `751px`,
  height: `60px`,
  position: `absolute`,
  left: `0px`,
  top: `483px`,
});

const AddAndManageOrganizaSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
});

const AddAndManageOrganizaSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(238, 108, 77, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
});

const AddAndManageOrganiza = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `48px`,
  letterSpacing: `-2.88px`,
  textDecoration: `none`,
  lineHeight: `126.49999856948853%`,
  textTransform: `none`,
  width: `535px`,
  height: `120px`,
  position: `absolute`,
  left: `253px`,
  top: `3202px`,
});

const LinkContactsToOrgani = styled("div")({
  textAlign: `left`,
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
  width: `751px`,
  height: `60px`,
  position: `absolute`,
  left: `253px`,
  top: `3340px`,
});

const Q731 = styled("img")({
  height: `534px`,
  width: `534px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1200px`,
  top: `2000px`,
});

const Q741 = styled("img")({
  height: `543px`,
  width: `609px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `253px`,
  top: `2506px`,
});

const Q751 = styled("img")({
  height: `412px`,
  width: `646px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1042px`,
  top: `3082px`,
});

const Q761 = styled("img")({
  height: `731px`,
  width: `661px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `190px`,
  top: `3446px`,
});

const Q771 = styled("img")({
  height: `952px`,
  width: `855px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `851px`,
  top: `4146px`,
});

const ComingSoonInDevelopm = styled("div")({
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
  width: `1247px`,
  height: `88px`,
  position: `absolute`,
  left: `317px`,
  top: `5138px`,
});

const PhoneCustomersDirect = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `29px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `826px`,
  height: `45px`,
  position: `absolute`,
  left: `528px`,
  top: `5254px`,
});

const Group28 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `865px`,
  height: `61.13px`,
  left: `508px`,
  top: `5436px`,
});

const Group27 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `275px`,
  height: `61.13px`,
  left: `0px`,
  top: `0px`,
});

const EasySetUp1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `29px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `180px`,
  height: `43px`,
  position: `absolute`,
  left: `95px`,
  top: `9px`,
});

const Q701 = styled("img")({
  height: `61.13px`,
  width: `64px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Secure1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `29px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `114px`,
  height: `43px`,
  position: `absolute`,
  left: `751px`,
  top: `9px`,
});

const Q703 = styled("img")({
  height: `61.13px`,
  width: `64px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `652px`,
  top: `0px`,
});

const Group26 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `275px`,
  height: `61.13px`,
  left: `326px`,
  top: `0px`,
});

const FreeForever1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `29px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `180px`,
  height: `43px`,
  position: `absolute`,
  left: `95px`,
  top: `9px`,
});

const Q702 = styled("img")({
  height: `61.13px`,
  width: `64px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Rectangle19 = styled("div")({
  backgroundColor: `rgba(61, 90, 128, 1)`,
  borderRadius: `11px`,
  width: `331px`,
  height: `91px`,
  position: `absolute`,
  left: `775px`,
  top: `5564px`,
});

const Group39 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `192px`,
  height: `43px`,
  left: `845px`,
  top: `5588px`,
});

const SignUpFree2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `154px`,
  height: `31px`,
  position: `absolute`,
  left: `38px`,
  top: `6px`,
});

const Q52 = styled("img")({
  height: `43px`,
  width: `38px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Rectangle20 = styled("div")({
  backgroundColor: `rgba(12, 26, 44, 1)`,
  width: `1920px`,
  height: `636px`,
  position: `absolute`,
  left: `0px`,
  top: `5813px`,
});

const GetChat8 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `192px`,
  height: `46px`,
  position: `absolute`,
  left: `139px`,
  top: `5889px`,
});

const Group34 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1530px`,
  height: `355px`,
  left: `194px`,
  top: `6010px`,
});

const Group30 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `322px`,
  height: `142px`,
  left: `332px`,
  top: `1px`,
});

const Services1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(152, 193, 217, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `192px`,
  height: `46px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const HireChatAgents = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `208px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `63px`,
});

const HireAVirtualAssistan = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `322px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `111px`,
});

const Group33 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `248px`,
  height: `355px`,
  left: `1282px`,
  top: `0px`,
});

const LetSTalk = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(152, 193, 217, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `192px`,
  height: `46px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const TheBlueWidgetYouSeeB = styled("div")({
  textAlign: `left`,
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
  width: `248px`,
  height: `292px`,
  position: `absolute`,
  left: `0px`,
  top: `63px`,
});

const Group32 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `286px`,
  height: `238px`,
  left: `977px`,
  top: `0px`,
});

const About = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(152, 193, 217, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `192px`,
  height: `46px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const WhyFree1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `176px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `63px`,
});

const CareersJoinUs = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `268px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `111px`,
});

const Customers1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `218px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `159px`,
});

const Partners1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `286px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `207px`,
});

const Group31 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `286px`,
  height: `277px`,
  left: `701px`,
  top: `0px`,
});

const Resources1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(152, 193, 217, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `192px`,
  height: `46px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const HelpCenter = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `176px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `63px`,
});

const Academy = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `160px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `111px`,
});

const Developers = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `218px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `159px`,
});

const Status = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `286px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `207px`,
});

const Blog = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `286px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `246px`,
});

const Group29 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `286px`,
  height: `282px`,
  left: `0px`,
  top: `1px`,
});

const Products1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(152, 193, 217, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `192px`,
  height: `46px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const LiveChat = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `138px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `63px`,
});

const ChartPages = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `160px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `111px`,
});

const KnowledgeBase = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `218px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `159px`,
});

const ContactsAFreeCrm = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `286px`,
  height: `31px`,
  position: `absolute`,
  left: `0px`,
  top: `207px`,
});

const AiAssist = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `234px`,
  height: `31px`,
  position: `absolute`,
  left: `36px`,
  top: `251px`,
});

const Q18 = styled("img")({
  height: `29px`,
  width: `30px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `253px`,
});

  function Contacts() {
    const navigate = useNavigate();
  
    // Function to handle the click event on the Q11 image
    const handleQ11Click = () => {
      // Add any additional logic here if needed
      // Navigate to the LandingPage when the image is clicked
      navigate('/');
    };
  
    // Function to handle the click event on the Log In button
    const handleLoginClick = () => {
      // Navigate to the Log In page when the Log In button is clicked
      navigate('/log-in');
    };
  
    return (
    <Contacts1>
      <Rectangle1>
      </Rectangle1>
      <Q11 src={Q11Image} loading='lazy' alt={"1 1"}/>
      <IntroducingAiAssist>
        {`Introducing AI Assist!`}
      </IntroducingAiAssist>
      <Products>
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
      <LogIn onClick={handleLoginClick}>
        {`Log in`}
      </LogIn>
      <SignUpFree>
        {`Sign up Free`}
      </SignUpFree>
      <TrackUnlimitedLeadsC>
        {`Track unlimited leads, collaborate with shared data, and empower your sales team with a user-friendly CRM that keeps you close to your customers.`}
      </TrackUnlimitedLeadsC>
      <Rectangle4>
      </Rectangle4>
      <SignUpFree1>
        {`SIGN UP FREE`}
      </SignUpFree1>
      <Q51 src={Q51Image} loading='lazy' alt={"5 1"}/>
      <Rectangle5>
      </Rectangle5>
      <ScheduleACall>
        {`SCHEDULE A CALL`}
      </ScheduleACall>
      <Q721 src={Q721Image} loading='lazy' alt={"72 1"}/>
      <Group37>
        <EasySetUp>
          {`Easy set-up`}
        </EasySetUp>
        <FreeForever>
          {`Free Forever`}
        </FreeForever>
        <Secure>
          {`Secure`}
        </Secure>
        <Ellipse1 src={Ellipse1Image} loading='lazy' alt={"Ellipse 1"}/>
        <Ellipse2 src={Ellipse2Image} loading='lazy' alt={"Ellipse 2"}/>
      </Group37>
      <AddContextToConversa>
        {`Add context to conversations with Contacts — a free CRM`}
      </AddContextToConversa>
      <Q61 src={Q61Image} loading='lazy' alt={"6 1"}/>
      <Q7 src={Q7Image} loading='lazy' alt={"7"}/>
      <Q8 src={Q8Image} loading='lazy' alt={"8"}/>
      <Q9 src={Q9Image} loading='lazy' alt={"9"}/>
      <BuiltIntoYourDashboa>
        {`Built into your dashboard and fully integrated with live chat and ticketing, there’s no installation needed.`}
      </BuiltIntoYourDashboa>
      <AddManageAndTrackUnl>
        {`Add, manage, and track unlimited contacts for unlimited properties — without the price tag.`}
      </AddManageAndTrackUnl>
      <SkipTheLearningCurve>
        {`Skip the learning curve and ultra-complicated training programs. With no IT knowledge required, anyone can use this.`}
      </SkipTheLearningCurve>
      <EasyNoCodeSetup>
        {`Easy, no-code setup`}
      </EasyNoCodeSetup>
      <EmpowerYourTeam>
        {`Empower your team`}
      </EmpowerYourTeam>
      <AddUnlimitedContacts>
        {`Add Unlimited contacts`}
      </AddUnlimitedContacts>
      <ContactsLetsYouManag>
        {`Contacts lets you manage and organize all of your leads, prospects, and customers for multiple businesses in one place`}
      </ContactsLetsYouManag>
      <NeverLetALeadGoCold>
        {`Never let a lead go cold`}
      </NeverLetALeadGoCold>
      <SeeTheDataThatMatter>
        {`See the data that matters for your business`}
      </SeeTheDataThatMatter>
      <Q71 src={Q71Image} loading='lazy' alt={"71"}/>
      <CreateSegmentsAndCus>
        <CreateSegmentsAndCusSpan1 >{`Create segments and `}</CreateSegmentsAndCusSpan1>
        <CreateSegmentsAndCusSpan2 >{`custom attributes`}</CreateSegmentsAndCusSpan2>
      </CreateSegmentsAndCus>
      <CustomizeYourContact>
        {`Customize your Contacts display with custom attributes and segments. Add, delete, and sort columns to tailor your view for your business.`}
      </CustomizeYourContact>
      <QualifyLeads>
        <QualifyLeadsSpan1 >{`Qualify `}</QualifyLeadsSpan1>
        <QualifyLeadsSpan2 >{`leads`}</QualifyLeadsSpan2>
      </QualifyLeads>
      <ViewTagAndContinueCo>
        {`View, tag, and continue conversations from a profile or your inbox. Get organized, avoid missed follow-ups with potential customers, and never let a lead go cold.`}
      </ViewTagAndContinueCo>
      <ImportEasily>
        <ImportEasilySpan1 >{`Import `}</ImportEasilySpan1>
        <ImportEasilySpan2 >{`easily`}</ImportEasilySpan2>
      </ImportEasily>
      <ViewTagAndContinueCo1>
        {`View, tag, and continue conversations from a profile or your inbox. Get organized, avoid missed follow-ups with potential customers, and never let a lead go cold.`}
      </ViewTagAndContinueCo1>
      <Group38>
        <SeeTheBigPicture>
          {`See the big picture`}
        </SeeTheBigPicture>
        <HavingAllOfYourEmail>
          {`Having all of your emails, notes, documents, and history in one place gives you context for conversations and a view of the whole customer journey.`}
        </HavingAllOfYourEmail>
        <SaveTimeAndStreamlin>
          {`Save time and streamline`}
        </SaveTimeAndStreamlin>
        <EnterContactDetailsD>
          {`Enter contact details directly into your CRM from a live chat or ticketing email. With all of your information in view, you save time and avoid lost opportunities.`}
        </EnterContactDetailsD>
        <Q247365Support>
          {`24×7-365 Support`}
        </Q247365Support>
        <OurFriendlyAndHelpfu>
          {`Our friendly and helpful support agents are always available to assist you. Need more help? Schedule a one-on-one call with a representative.`}
        </OurFriendlyAndHelpfu>
      </Group38>
      <AddAndManageOrganiza>
        <AddAndManageOrganizaSpan1 >{`Add and manage `}</AddAndManageOrganizaSpan1>
        <AddAndManageOrganizaSpan2 >{`Organizations`}</AddAndManageOrganizaSpan2>
      </AddAndManageOrganiza>
      <LinkContactsToOrgani>
        {`Link contacts to organizations and view all contacts for each. Always know your primary contact for every business you work with.`}
      </LinkContactsToOrgani>
      <Q731 src={Q731Image} loading='lazy' alt={"73 1"}/>
      <Q741 src={Q741Image} loading='lazy' alt={"74 1"}/>
      <Q751 src={Q751Image} loading='lazy' alt={"75 1"}/>
      <Q761 src={Q761Image} loading='lazy' alt={"76 1"}/>
      <Q771 src={Q771Image} loading='lazy' alt={"77 1"}/>
      <ComingSoonInDevelopm>
        {`Coming Soon — in development!`}
      </ComingSoonInDevelopm>
      <PhoneCustomersDirect>
        {`Phone customers — directly from your CRM
Send and receive SMS messages
Collect payments and fees in the widget via Billing`}
      </PhoneCustomersDirect>
      <Group28>
        <Group27>
          <EasySetUp1>
            {`Easy set-up`}
          </EasySetUp1>
          <Q701 src={Q701Image} loading='lazy' alt={"70 1"}/>
        </Group27>
        <Secure1>
          {`Secure`}
        </Secure1>
        <Q703 src={Q703Image} loading='lazy' alt={"70 3"}/>
        <Group26>
          <FreeForever1>
            {`Free Forever`}
          </FreeForever1>
          <Q702 src={Q702Image} loading='lazy' alt={"70 2"}/>
        </Group26>
      </Group28>
      <Rectangle19>
      </Rectangle19>
      <Group39>
        <SignUpFree2>
          {`SIGN UP FREE`}
        </SignUpFree2>
        <Q52 src={Q52Image} loading='lazy' alt={"5 2"}/>
      </Group39>
      <Rectangle20>
      </Rectangle20>
      <GetChat8>
        {`Get CHAT8`}
      </GetChat8>
      <Group34>
        <Group30>
          <Services1>
            {`Services`}
          </Services1>
          <HireChatAgents>
            {`Hire Chat Agents`}
          </HireChatAgents>
          <HireAVirtualAssistan>
            {`Hire a Virtual Assistant`}
          </HireAVirtualAssistan>
        </Group30>
        <Group33>
          <LetSTalk>
            {`Let’s talk?`}
          </LetSTalk>
          <TheBlueWidgetYouSeeB>
            {`The blue widget you see below this text is the CHAT8 live chat widget, if you click it you will see the window maximize and you will be able to chat with the CHAT8 team 24×7-365. You can add a chat widget like this on your own site, with your own custom colors, messages, size, position and language. Click the widget and give it a try!`}
          </TheBlueWidgetYouSeeB>
        </Group33>
        <Group32>
          <About>
            {`About`}
          </About>
          <WhyFree1>
            {`Why Free?`}
          </WhyFree1>
          <CareersJoinUs>
            {`Careers - Join Us!`}
          </CareersJoinUs>
          <Customers1>
            {`Customers`}
          </Customers1>
          <Partners1>
            {`Partners`}
          </Partners1>
        </Group32>
        <Group31>
          <Resources1>
            {`Resources`}
          </Resources1>
          <HelpCenter>
            {`Help Center`}
          </HelpCenter>
          <Academy>
            {`Academy`}
          </Academy>
          <Developers>
            {`Developers`}
          </Developers>
          <Status>
            {`Status`}
          </Status>
          <Blog>
            {`Blog`}
          </Blog>
        </Group31>
        <Group29>
          <Products1>
            {`Products`}
          </Products1>
          <LiveChat>
            {`Live Chat`}
          </LiveChat>
          <ChartPages>
            {`Chart Pages`}
          </ChartPages>
          <KnowledgeBase>
            {`Knowledge Base`}
          </KnowledgeBase>
          <ContactsAFreeCrm>
            {`Contacts - a Free CRM`}
          </ContactsAFreeCrm>
          <AiAssist>
            {`AI Assist`}
          </AiAssist>
          <Q18 src={Q18Image} loading='lazy' alt={"1 8"}/>
        </Group29>
      </Group34>
    </Contacts1>);

  }

export default Contacts;