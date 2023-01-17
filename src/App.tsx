import Button from "@components/buttons/Button";
import Login from "@components/login";
import UserPage from "@components/user";
import { authChannel } from "@utils/broadcast-channels/auth";
import { themeChannel, toggleTheme } from "@utils/broadcast-channels/theme";
import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { IAuthChannelEvent } from "types/utils/broadcast-channels/auth";
import { IThemeChannelEvent } from "types/utils/broadcast-channels/theme";

function App() {
  const [isDarkTheme, setisDarkTheme] = useState(true);
  const navigate = useNavigate();

  const syncAuth = useCallback(() => {
    authChannel.onmessage = (event: IAuthChannelEvent) => {
      navigate(
        event.code === "LOGIN"
          ? window.location.origin
          : `${window.location.origin}/login`
      );
    };
  }, [navigate]);

  const syncTheme = useCallback(() => {
    themeChannel.onmessage = (event: IThemeChannelEvent) => {
      setisDarkTheme(event.isDarkTheme);
    };
  }, []);

  useEffect(() => {
    syncAuth();
    syncTheme();
  }, [syncAuth, syncTheme]);

  const handleToggleTheme = () => {
    setisDarkTheme(!isDarkTheme);
    toggleTheme(isDarkTheme);
  };

  return (
    <div
      className={classNames(
        "flex flex-col min-h-screen",
        isDarkTheme ? "dark" : ""
      )}
    >
      <div className="bg-black p-4">
        <Button onClick={handleToggleTheme}>Toggle Dark / Light theme</Button>
      </div>
      <div
        className={classNames(
          "min-w-screen flex-1 flex items-center justify-center flex-col space-y-10 transition-all dark:bg-slate-800"
        )}
      >
        <Routes>
          <Route path="/">
            <Route index element={<UserPage />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
