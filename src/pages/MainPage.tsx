import React from "react";
import { Preview } from "../components/sections/First/Preview";
import { AppHeader } from "../components/UI/AppHeader/AppHeader";
import { ThemeMainPage } from "./MainPage.style";

export const MainPage = () => {
  return (
    <ThemeMainPage>
      <AppHeader />
      <Preview />
    </ThemeMainPage>
  );
};
