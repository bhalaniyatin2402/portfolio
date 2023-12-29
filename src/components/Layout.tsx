import { ReactNode } from "react";

interface LayoutType {
  children: ReactNode;
  className?: string;
}

function Layout({ children, className }: LayoutType) {
  return (
    <div
      className={`${className} layout w-full h-full inline-block z-0 p-5 bg:light dark:bg-dark text-dark dark:text-light`}
    >
      {children}
    </div>
  );
}

export default Layout;
