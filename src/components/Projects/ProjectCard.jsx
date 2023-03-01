import React from "react";
import { IconContext } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import {
  LinkName,
  ProjectCard,
  ProjectCodeLink,
  ProjectDetails,
  ProjectImage,
  ProjectLiveLink,
  ProjectTitle,
  ProjectTransitionImage,
} from "../styles/ProjectsStyled";

export default function ProjectCardComponent({
  image,
  transitionImage,
  title,
  codeLink,
  liveLink,
}) {
  return (
    <>
      <IconContext.Provider value={{ size: "1rem" }}>
        <ProjectCard>
          <ProjectImage src={image} alt={title} />
          <ProjectTransitionImage src={transitionImage} alt={title} />
          <ProjectDetails>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectCodeLink
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMarkGithub />
              <LinkName>GitHub code</LinkName>
            </ProjectCodeLink>
            <ProjectLiveLink
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal />
              <LinkName>Live page</LinkName>
            </ProjectLiveLink>
          </ProjectDetails>
        </ProjectCard>
      </IconContext.Provider>
    </>
  );
}
