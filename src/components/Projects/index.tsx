// @ts-nocheck
import React from "react";
import Image from "next/legacy/image";
import Paragraph from "../Paragraph";
import { SectionSubtitle } from "../Reusables/styles";
import {
  AboutContainer,
  AboutContent,
  AboutData,
  H2SectionTitle,
  StyledAbout,
} from "../AboutUs/styles";
import { appsMobile, websites } from "./data";
import { LinkStyled, ProjectContainer, ProjectsRow } from "./styles";

const Projects = () => {
  const ProjectsItems = (props: any) => (
    <LinkStyled href={props.link} passHref target={"_blank"}>
      <ProjectContainer>
        <Paragraph
          size="h3Font"
          style={{ textAlign: "center", padding: "4px 12px" }}
        >
          {props.title}
        </Paragraph>
        <Image alt={"Coding Image"} src={props.image} />
      </ProjectContainer>
    </LinkStyled>
  );

  return (
    <StyledAbout id="projects">
      <AboutContainer>
        <AboutContent>
          <AboutData>
            <SectionSubtitle>Visualizar Projetos</SectionSubtitle>
            <H2SectionTitle>
              Visualize nossos modelos de<span>:</span>
            </H2SectionTitle>

            <h2 style={{ textAlign: "center" }}>Sites Completos!</h2>
            <Paragraph style={{ textAlign: "center" }}>
              Clique no site para visualizar
            </Paragraph>

            <ProjectsRow>
              {websites.map((item, index) => (
                <ProjectsItems
                  key={index}
                  image={item.image}
                  title={item.title}
                  label={item.label}
                  link={item.link}
                />
              ))}
            </ProjectsRow>

            <h2 style={{ marginTop: "12px", textAlign: "center" }}>
              Aplicativos Completos!
            </h2>
            <Paragraph style={{ textAlign: "center" }}>
              Clique para baixar o app!
            </Paragraph>

            <ProjectsRow>
              {appsMobile.map((item, index) => (
                <ProjectsItems
                  key={index}
                  image={item.image}
                  title={item.title}
                  label={item.label}
                  link={item.link}
                />
              ))}
            </ProjectsRow>
          </AboutData>
        </AboutContent>
      </AboutContainer>
    </StyledAbout>
  );
};

export default Projects;