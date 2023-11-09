import React from "react";
import { ThemeHeaderBottom } from "../Header.style";
import { BathRoom } from "./utils/BathRoom";
import { BedRoom } from "./utils/BedRoom";
import { Kitchen } from "./utils/Kitchen";
import { LivingRoom } from "./utils/LivingRoom";
import { OwnRoom } from "./utils/OwnRoom";

export const HeaderBottom = () => {
  return (
    <ThemeHeaderBottom>
      <span>
        <BathRoom />
        BathRoom
      </span>
      <div></div>
      <span>
        <LivingRoom />
        LivingRoom
      </span>
      <div></div>
      <span>
        <Kitchen />
        Kitchen
      </span>
      <div></div>
      <span>
        <BedRoom />
        BedRoom
      </span>
      <div></div>
      <span>
        <OwnRoom />
        OwnRoom
      </span>
    </ThemeHeaderBottom>
  );
};
