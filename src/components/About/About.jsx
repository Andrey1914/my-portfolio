import React from "react";
import myPhoto from "../../assets/myPhoto.jpg";
import resume from "../../assets/resume/cv_react_developer_andrei_kurka.pdf";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/AboutStyles";
import { SectionHeading, SectionTitle } from "../styles/SectionHeadingStyled";
import { StyledParagraph } from "../styles/TypographyStyled";
import downloadIcon from "../../assets/icons/download-icon.svg";

export default function About() {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myPhoto} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Andriy K. I am a passionate full stack developer from
            Ukraine.
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create responsive websites or web apps. The
            technologies, tools and languages I am using to build my projects
            are VSCode, HTML5, CSS3, JavaScript, React.js, Node.js, Git and
            GitHub, MaterialUI, Styled-Components and Figma.
          </StyledParagraph>
          <StyledParagraph>
            I have eagerness to learn something new every day. And I am looking
            forward to talk with you!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="Andrey_Kurka_CV"
            >
              Download CV
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
}
