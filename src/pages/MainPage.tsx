import React from "react";
import { Preview } from "../components/sections/First/Preview";
import { AppHeader } from "../components/UI/AppHeader/AppHeader";
import { ThemeMainPage } from "./MainPage.style";
import { AboutUs } from "../components/sections/Second/AboutUs";
import { SpecialQualities } from "../components/sections/Third/SpecialQualities";
import { WayChoose } from "../components/sections/Fourth/WayChoose";
import { OurTeachers } from "../components/sections/Fifth/OurTeachers";

export const MainPage = () => {
  return (
    <ThemeMainPage>
      <AppHeader />
      <Preview />
      <AboutUs />
      <SpecialQualities />
      <WayChoose />
      <OurTeachers />
    </ThemeMainPage>
  );
};
