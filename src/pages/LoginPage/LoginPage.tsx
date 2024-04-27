import React from "react";
import { ThemeLoginPage } from "./LoginPage.style";

export const LoginPage = () => {
  return (
    <ThemeLoginPage>
      <h1>Запишитесь на пробный урок</h1>
      <form action="">
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <button>Назад</button>
          <button>Дальше</button>
        </div>
      </form>
    </ThemeLoginPage>
  );
};
