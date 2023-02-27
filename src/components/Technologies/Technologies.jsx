import React from "react";
import {
  TechnologiesContainer,
  TechnologiesHeader,
  TechnologiesIcons,
  TechnologyIcon,
} from "../styles/TechnologiesStyled";
import { iconsData } from "./Icons";

export default function Technologies() {
  return (
    <TechnologiesContainer>
      <TechnologiesHeader>Technologies I'm familiar with</TechnologiesHeader>

      <TechnologiesIcons>
        {iconsData.map((iconData) => {
          return (
            <TechnologyIcon
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
            />
          );
        })}
      </TechnologiesIcons>
    </TechnologiesContainer>
  );
}
