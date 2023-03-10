import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import {
  COLORS,
  TYPOGRAPHY,
  TYPOGRAPHY1024,
  WEIGHTFONT,
} from "../../constants/cssVariables";

export const FacebookIcon = styled(FaFacebookSquare)``;

export const InstagramIcon = styled(BsInstagram)``;

export const FooterLogo = styled.a`
  color: ${COLORS.firstColor};
  font-size: ${TYPOGRAPHY.h2Font};
  font-weight: ${WEIGHTFONT.semibold};
  display: inline-flex;
  align-items: center;
  column-gap: 0.25rem;
  padding-top: 1rem;
  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.h3Font};
    margin: 0 auto;
  }
`;

export const FooterSection = styled.footer`
  padding: 1rem 1.5rem 0 1.5rem;
  background-color: white;
  @media screen and (max-width: 1023px) {
    margin-top: 1rem;
  }
`;

export const FooterTitle = styled.h3`
  font-size: ${TYPOGRAPHY.h3Font};
  margin-bottom: 1rem;
  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.h3Font};
    margin-bottom: 0.2rem;
  }
`;

export const FooterSocialLink = styled.a`
  font-size: 1.25rem;
  color: ${COLORS.textColor};
  transition: 0.1s;
  :hover {
    color: ${COLORS.titleColor};
    font-size: 2.5rem;
  }
`;

export const FooterCopy = styled.span`
  text-align: center;
  margin-top: 12px;
  width: 100%;
  font-size: ${TYPOGRAPHY.small};
  font-weight: ${WEIGHTFONT.medium};
  color: ${COLORS.firstColor};
  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.small};
  }
`;
