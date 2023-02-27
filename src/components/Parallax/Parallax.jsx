import React from "react";
import { Parallax } from "react-parallax";
import parallaxImage from "../../assets/quote-background.jpg";
import { ParallaxContainer, ParallaxText } from "../styles/ParallaxStyled";

export default function ParallaxComponent() {
  return (
    <Parallax bgImage={parallaxImage} strength={-200} style={{ width: "100%" }}>
      <ParallaxContainer>
        <ParallaxText>
          Success comes to <br />
          those who dare to begin.
        </ParallaxText>
      </ParallaxContainer>
    </Parallax>
  );
}
