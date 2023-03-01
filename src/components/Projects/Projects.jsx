import React from "react";
import { StyledParagraph, StyledLink } from "../styles/TypographyStyled";
import { ProjectsContainer, StyledProjects } from "../styles/ProjectsStyled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeadingStyled";
import { projectData } from "./projectsData";
import ProjectCardComponent from "./ProjectCard";

export default function Projects() {
  return (
    <StyledProjects id="projects">
      <SectionHeading>
        <SectionTitle number="01">Projects</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center">
        Projects I have worked on.{" "}
        <StyledLink
          href="https://github.com/Andrey1914?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Want to see more?
        </StyledLink>
      </StyledParagraph>
      <ProjectsContainer>
        {projectData.map((project) => {
          return <ProjectCardComponent key={project.id} {...project} />;
        })}
      </ProjectsContainer>
    </StyledProjects>
  );
}
