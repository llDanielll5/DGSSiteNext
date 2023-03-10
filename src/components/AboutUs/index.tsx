//@ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import Paragraph from "../Paragraph";
import { aboutData } from "./data";
import {
  AboutAccordion,
  AboutAccordionArrow,
  AboutAccordionContent,
  AboutAccordionDescription,
  AboutAccordionHeader,
  AboutAccordionItem,
  AboutAccordionTitle,
  AboutContainer,
  AboutContent,
  ArrowDownIcon,
  FadeInContainerText,
  PortfolioAnchor,
  StyledAbout,
} from "./styles";
import TextFadeIn, { FadeInText } from "../TextFadeIn";
import Button from "../Button";
import { useGetScrollPosition } from "../../hooks/useGetScrollPosition";

export interface AboutItems {
  icon: any;
  index: number;
  title: string;
  description: string;
}

const AboutUs = () => {
  const currentScroll = useGetScrollPosition();
  const textFadeRef = useRef<HTMLDivElement>(null);
  const aboutButtonRef = useRef<HTMLElement>(null);
  const accordionItemRef = useRef<HTMLDivElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const accordionHeaderRef = useRef<HTMLDivElement>(null);
  const [aboutItemsHeight, setAboutItemsHeight] = useState<any[]>([0, 0, 0]);
  const textStyleRef = textFadeRef?.current?.style;
  const accordionStyle = accordionItemRef?.current?.style;
  const buttonStyleRef = aboutButtonRef?.current?.style;

  const toggleAboutItem = (index: number) => {
    if (aboutItemsHeight[index] === 0) {
      setAboutItemsHeight((previous) => {
        const clone = [...previous];
        for (let i = 0; i < clone.length; i++) {
          clone[i] = 0;
        }
        clone[index] = "auto";

        return clone;
      });
    } else {
      setAboutItemsHeight((previous) => {
        const clone = [...previous];
        clone[index] = 0;
        return clone;
      });
    }
  };

  const fadeInPage = () => {
    textStyleRef?.setProperty("left", "80%");
    accordionStyle?.setProperty("opacity", "1");
    buttonStyleRef?.setProperty("opacity", "1");
  };
  const fadeOutPage = () => {
    textStyleRef?.setProperty("left", "0");
    accordionStyle?.setProperty("opacity", "0");
    buttonStyleRef?.setProperty("opacity", "0");
  };

  useEffect(() => {
    if (currentScroll > 200) fadeInPage();
    else fadeOutPage();
  }, [currentScroll]);

  const AboutItems = (props: AboutItems) => (
    <AboutAccordionItem
      id="items"
      dynamicHeight={aboutItemsHeight[props.index]}
    >
      <AboutAccordionHeader
        ref={accordionHeaderRef}
        id="header"
        onClick={() => toggleAboutItem(props.index)}
      >
        {props.icon}
        <AboutAccordionTitle>{props.title}</AboutAccordionTitle>
        <AboutAccordionArrow>
          <ArrowDownIcon dynamicHeight={aboutItemsHeight[props.index]} />
        </AboutAccordionArrow>
      </AboutAccordionHeader>

      <AboutAccordionContent dynamicHeight={aboutItemsHeight[props.index]}>
        <AboutAccordionDescription>
          {props.description}
        </AboutAccordionDescription>
      </AboutAccordionContent>
    </AboutAccordionItem>
  );
  return (
    <StyledAbout id={"aboutus"}>
      <AboutContainer>
        <AboutContent>
          <FadeInContainerText>
            <TextFadeIn content="Sobre N??s" backColor={"white"} />
            <FadeInText ref={textFadeRef} backColor={"white"} />
          </FadeInContainerText>

          <AboutAccordionContent ref={accordionItemRef} id="content">
            <AboutAccordionDescription>
              Os servi??os digitais como sites, aplicativos e sistemas s??o
              essenciais para empresas que desejam expandir sua presen??a online
              e melhorar sua efici??ncia operacional. A automa????o desses
              processos oferece in??meras vantagens, como a redu????o de erros
              humanos, aumento da produtividade, economia de tempo e redu????o de
              custos. <br />
              <br /> Al??m disso, a presen??a digital ?? uma necessidade b??sica nos
              dias de hoje. Empresas que n??o investem em servi??os digitais est??o
              perdendo oportunidades valiosas de se conectar com seus clientes e
              aumentar sua base de clientes. <br />
              <br />
              Pensando nisso n??s procuramos oferecer o melhor servi??o e
              atendimento, para oferecer o melhor sistema e adequa????o digital
              para sua empresa.
            </AboutAccordionDescription>
          </AboutAccordionContent>
        </AboutContent>
        <PortfolioAnchor href="/projects" ref={aboutButtonRef}>
          Conhe??a nosso Portf??lio
        </PortfolioAnchor>
      </AboutContainer>
    </StyledAbout>
  );
};

export default AboutUs;
