import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomLink from "./CustomLink";
import { Icon } from "@iconify/react";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import "../styles/components/Header.scss";

function Header() {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useThemeSwitcher();
  const location = useLocation();

  useEffect(() => {
    if (show) setShow(false);
  }, [location]);

  return (
    <header className={`bg-light dark:bg-dark`}>
      <div
        className="hemberger my-auto text-3xl"
        onClick={() => setShow(!show)}
      >
        {show ? (
          <Icon icon="iconamoon:close-duotone" className="dark:text-light" />
        ) : (
          <Icon icon="ph:list-bold" className="dark:text-light" />
        )}
      </div>
      <div
        className={`navbar ${
          show ? "mobile-view" : ""
        } bg-dark/90 dark:bg-light/75 sm:bg-light dark:sm:bg-dark`}
      >
        <nav className="nav-links">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
        </nav>

        <div className="icon text-2xl my-auto">
          <a
            href="https://github.com/bhalaniyatin2402"
            target="_blank"
            className="dark:bg-light dark:p-[1px] rounded-full hidden sm:block"
          >
            <Icon icon="devicon:github" />
          </a>
          <a
            href="https://github.com/bhalaniyatin2402"
            target="_blank"
            className="bg-light p-[1px] rounded-full dark:bg-none sm:hidden"
          >
            <Icon icon="devicon:github" />
          </a>
          <a
            href="https://www.linkedin.com/in/yatin-bhalani-3b69a6207/"
            target="_blank"
          >
            <Icon icon="skill-icons:linkedin" />
          </a>
          <a href="https://www.instagram.com/yatin_bhalani/" target="_blank">
            <Icon icon="skill-icons:instagram" />
          </a>

          <span
            className="my-auto bg-dark text-light rounded-full p-[2px]"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode == "dark" ? (
              <Icon
                icon="line-md:moon-filled-to-sunny-filled-loop-transition"
                className="cursor-pointer"
              />
            ) : (
              <Icon
                icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition"
                width="20"
                height="20"
                className="cursor-pointer"
              />
            )}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
