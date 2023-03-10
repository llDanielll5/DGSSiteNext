import styled from "styled-components";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const StyledMain = styled.div`
  /* overflow: hidden; */
  width: 100vw;
  @media screen and (max-width: 1024px) {
    max-width: 1024px;
  }
  @media screen and (max-width: 960px) {
    max-width: 960px;
  }
`;

export const ScrollUpIcon = styled(AiOutlineWhatsApp)`
  width: 55px;
  height: 55px;
`;
