import React from "react";
import { Preview } from "../components/sections/First/Preview";
import { AppHeader } from "../components/UI/AppHeader/AppHeader";
import { ThemeMainPage } from "./MainPage.style";
import { AboutUs } from "../components/sections/Second/AboutUs";

export const MainPage = () => {
  return (
    <ThemeMainPage>
      <AppHeader />
      <Preview />
      <AboutUs />
    </ThemeMainPage>
  );
};
