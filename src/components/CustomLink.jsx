import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CustomLink({ href, title }) {
  const location = useLocation();

  return (
    <Link
      to={href}
      className="group text-light sm:text-dark dark:text-dark dark:sm:text-light"
    >
      {title}

      <span
        className={`${
          location.pathname == href ? "w-full" : "w-0"
        }  bg-light sm:bg-dark dark:bg-dark dark:sm:bg-light left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}
      >
        &nbsp;
      </span>
    </Link>
  );
}

export default CustomLink;
