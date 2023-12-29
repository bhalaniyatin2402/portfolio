import { useEffect, useState } from "react";

type SwitchModeFuncType = (mode: string) => void

function useThemeSwitcher() {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState<string>("");

  const switchMode: SwitchModeFuncType = (mode) => {
    setMode(mode === "light" ? "dark" : "light")
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    if (userPref) {
      let check = userPref === "dark" ? "dark" : "light";
      setMode(check);
      if (check === "dark") {
        document.documentElement.classList.add("dark");
      }

      if (check !== "dark") {
        document.documentElement.classList.remove("dark");
      }
    } else {
      console.log(mediaQuery.matches);
      let check = mediaQuery.matches ? "dark" : "light";
      setMode(check);
      if (check === "dark") {
        document.documentElement.classList.add("dark");
      }
      if (check !== "dark") {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return { mode, switchMode };
}

export default useThemeSwitcher;
