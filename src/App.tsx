import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { theme } from "./theme/theme";
import { MainPage } from "./pages/MainPage/MainPage";
import { ThemeProvider } from "styled-components";
import { LoginPage } from "./pages/LoginPage/LoginPage";

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
    // {
    //   path: "/login",
    //   element: <LoginPage />,
    // },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
