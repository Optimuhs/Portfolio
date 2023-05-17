import { MenuIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { FunctionComponent, useState } from "react";
import { Link } from "react-scroll";
import { LinkComp } from "./LinkComp";

export const Navbar: FunctionComponent = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  };

  const getMenuLinks = () => (
    <ul
      className={clsx(
        "flex-col",
        "p-[25px]",
        "lg:ml-auto",
        "lg:flex",
        "lg:flex-row"
      )}
    >
      <LinkComp href="#About" position={-500}>
        About Me
      </LinkComp>
      <LinkComp href="#Work" position={-150}>
        My Work
      </LinkComp>
      <LinkComp href="#Contact" position={1900}>
        Contact Me
      </LinkComp>
    </ul>
  );

  return (
    <div>
      <nav
        className={clsx(
          "flex",
          "flex-row",
          "items-center",
          "h-[120px]",
          "bg-emerald-900",
          "text-stone-100",
          "sm:fixed",
          "sm:w-screen",
          "sm:flex-col",
          "md:flex-col",
          "md:w-[160px]",
          "md:h-screen",
          "md:content-center",
          "md:justify-center",
          "lg:flex-row",
          "lg:w-full",
          "lg:justify-items-center",
          "lg:h-[120px]"
        )}
      >
        <Link activeClass="active" to={"#About"} spy={true} smooth={true} duration={500} offset={-150}>
        <h1
          className={clsx(
            "p-[10px]",
            "mx-5",
            "text-2xl",
            "lg:ml-6",
            "lg:content-center",
            "lg:text-4xl",
            "lg:inline-block"
          )}
        >
          Optimuhs
        </h1>
        </Link>
        <div
          className={clsx(
            "rounded-full",
            "shadow-lg",
            "shadow-black-500",
            "p-3",
            "ml-auto",
            "mr-5",
            "cursor-pointer",
            "md:hidden"
          )}
          onClick={toggleNav}
        >
          <MenuIcon
            className={clsx("w-10", "z-50", "ml-auto", "md:hidden")}
          />
        </div>

        <div className={clsx("flex", "sm:flex-col", "hidden", "md:inline-block")}>
          {getMenuLinks()}
        </div>
      </nav>

          {/* Mobile nav */}
      <div className={toggle ? clsx("fixed", "left-0", "top-0", "h-screen", "w-full", "bg-black/70", "md:hidden" ): ""}>
        <div className={toggle ? 
          clsx("fixed", "left-0", "top-0", "w-[60%]", "h-screen", "ease-in duration-500","bg-zinc-200", "p-10", "flex", "flex-col", "items-center",
          "md:hidden" ) : 
          clsx("fixed", "left-[-100%]", "top-0", "h-screen", "ease-in duration-500","bg-zinc-200", "p-10", "flex", "flex-col", "items-center",
          "md:hidden" )}>
          <div className={clsx("rounded-full", "shadow-lg", "shadow-gray-400", "p-3", "cursor-pointer", "md:hidden")}
            onClick={toggleNav}>
            <XIcon className={clsx("w-10", "ml-auto")}/>
          </div>
          <div className={clsx("flex", "sm:flex-col", "my-10",
            "md:inline-block"
            )}>
              <ul className={clsx(
                  "flex-col", "p-[25px]", "space-y-10",
                  "lg:ml-auto", "lg:flex", "lg:flex-row")}>
                  <LinkComp href="#About" position={0}>About Me</LinkComp>
                  <LinkComp href="#Work" position={0}>My Work</LinkComp>
                  <LinkComp href="#Contact" position={2000}>Contact Me</LinkComp>

              </ul>
          </div>
        </div>
      </div>
    </div>
  )}

