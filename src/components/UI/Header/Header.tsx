import React from "react";
import { HeaderTop } from "./KindOf/HeaderTop";
import { ThemeHeader } from "./Header.style";
import { HeaderBottom } from "./KindOf/HeaderBottom";

export const Header = () => {
  return (
    <ThemeHeader>
      <HeaderTop />
      <HeaderBottom />
    </ThemeHeader>
  );
};
