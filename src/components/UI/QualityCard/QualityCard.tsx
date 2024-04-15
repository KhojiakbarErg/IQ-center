import React from "react";
import { ThemeQualityCard } from "./QualityCard.style";

interface QualityCardProps {
  img: string;
  label: string;
  text: string;
}

export const QualityCard = ({ img, label, text }: QualityCardProps) => {
  return (
    <ThemeQualityCard>
      <div className="line"></div>
      <img src={img} alt="property" />
      <h3>{label}</h3>
      <p>{text}</p>
    </ThemeQualityCard>
  );
};
