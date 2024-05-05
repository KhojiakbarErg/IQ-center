import React from "react";
import { ThemeAcceptense } from "./Acceptense.style";

export const Acceptense = () => {
  return (
    <ThemeAcceptense className="wheel">
      <img src="shape.png" alt="shape" className="shape1" loading="lazy" />
      <img src="shape.png" alt="shape" className="shape2" loading="lazy" />
      <img src="Maskgroup.png" alt="звезда" loading="lazy" />
    </ThemeAcceptense>
  );
};
