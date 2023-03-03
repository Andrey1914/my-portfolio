import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  ArrowToTop,
  ContactHeader,
  ContactWrapper,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  SmallContainer,
  Small,
  StyledFooter,
} from "../styles/FooterStyled";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <StyledFooter id="footer">
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>get in touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:anlikajw@gmail.com"
          data-hover="Let's talk!"
        >
          Need a developer?
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call me</ContactHeader>
          <ContactWrapper>
            <ContactLink href="tel:+48573897903">+48573897903</ContactLink>
            <ContactLink href="tel:+380676081196">+380676081196</ContactLink>
          </ContactWrapper>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://github.com/Andrey1914"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/andrei-kurka/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Let's grab a coffee.</ContactHeader>
          <ContactLink
            href="mailto:anlikajw@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            anlikajw@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <SmallContainer>
          &copy; Copyright {year} by
          <Small
            href="https://github.com/Andrey1914"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andrei Kurka.
          </Small>
        </SmallContainer>
      </Copyright>
    </StyledFooter>
  );
}
