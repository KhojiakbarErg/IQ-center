import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { theme } from "./theme/theme";
import { MainPage } from "./pages/MainPage/MainPage";
import { ThemeProvider } from "styled-components";
import { Congratulation } from "./pages/LoginPage/Congratulations";
import { WelcomePage } from "./pages/LoginPage/Welcome";

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
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
