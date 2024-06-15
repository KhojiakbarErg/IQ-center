import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { theme } from "./theme/theme";
import { MainPage } from "./pages/MainPage/MainPage";
import { ThemeProvider } from "styled-components";
import { Congratulation } from "./pages/LoginPage/Congratulations";
import { WelcomePage } from "./pages/LoginPage/Welcome";
import { PresentationPage } from "./pages/PresentationPage/PresentationPage";
import { Presentation } from "./pages/PresentationPage/Presentation";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/main",
      element: <MainPage />,
    },
    {
      path: "/welcome",
      element: <WelcomePage />,
    },
    {
      path: "/congratulations",
      element: <Congratulation />,
    },
    {
      path: "/presentation",
      element: <PresentationPage />,
    },
    {
      path: "/presentationitself",
      element: <Presentation />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
