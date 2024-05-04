import React from "react";
import { ThemeInfToChoose } from "./InfToChoose.style";

interface InfToChooseProps {
  name: string;
  property1: string;
  property2: string;
  property3: string;
  property4: string;
  image: string;
  duration: string;
  className?: string;
}

export const InfToChoose = ({
  name,
  property1,
  property2,
  property3,
  property4,
  image,
  duration,
  className,
}: InfToChooseProps) => {
  return (
    <ThemeInfToChoose className={className}>
      <div id="boxOfWay">
        <div>
          <h2>{name}</h2>
          <ul>
            <li>
              <img src="Ellipse.svg" alt="" />
              {property1}
            </li>
            <li>
              <img src="Ellipse.svg" alt="" />
              {property2}
            </li>
            <li>
              <img src="Ellipse.svg" alt="" />
              {property3}
            </li>
            <li>
              <img src="Ellipse.svg" alt="" />
              {property4}
            </li>
          </ul>
        </div>
        <div id="imgbox">
          <img src={image} alt="image" />
          <h4>{duration}</h4>
        </div>
      </div>
    </ThemeInfToChoose>
  );
};

interface InfToChooseSecProps {
  name: string;
  property1: string;
  property2: string;
  property3: string;
  image: string;
  duration: string;
  className?: string;
}

export const InfToChooseSec = ({
  name,
  property1,
  property2,
  property3,
  image,
  duration,
  className,
}: InfToChooseSecProps) => {
  return (
    <ThemeInfToChoose className={className}>
      <div id="boxOfWay">
        <div>
          <h2>{name}</h2>
          <ul>
            <li>
              <img src="Ellipse.svg" alt="" />
              {property1}
            </li>
            <li>
              <img src="Ellipse.svg" alt="" />
              {property2}
            </li>
            <li>
              <img src="Ellipse.svg" alt="" />
              {property3}
            </li>
          </ul>
        </div>
        <div id="imgbox">
          <img src={image} alt="image" />
          <h4>{duration}</h4>
        </div>
      </div>
    </ThemeInfToChoose>
  );
};
