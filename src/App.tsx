import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { theme } from "./theme/theme";
import { MainPage } from "./pages/MainPage/MainPage";
import { ThemeProvider } from "styled-components";
import { Login2 } from "./pages/LoginPage/Login2";
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
      path: "/login2",
      element: <Login2 />,
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
