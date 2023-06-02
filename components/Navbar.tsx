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

  const handleLinkClick = () => {
    if (toggle) {
      toggleNav(); // Close the mobile sidebar after link click
    }
  };

  const getMenuLinks = (about:number, work:number, contact:number) => (
    <ul
      className={clsx(
        "flex-col",
        "sm:content-center",
        "sm:items-center",
        "sm:justify-center",

        "md:items-center",
        "md:justify-center",
        "md:text-lg",

        "lg:h-fill",
        "lg:ml-auto",
        "lg:flex",
        "lg:flex-row",

        "text-left",
        "mt-4"
      )}
    >
      <LinkComp href="#About" position={about} onStateChange={handleLinkClick}>
        About Me
      </LinkComp>
      <LinkComp href="#Work" position={work} onStateChange={handleLinkClick}>
        Projects
      </LinkComp>
      <LinkComp href="#Contact" position={contact} onStateChange={handleLinkClick}>
        Contact Me
      </LinkComp>
    </ul>
  );

  return (
    <div className={clsx("flex", "flex-col")}>
      <nav
        className={clsx(
          "flex",
          
          "bg-darkGrey",
          "text-stone-100",
          "p-5",

          "sm:fixed",
          "sm:w-screen",
          "sm:flex-row",
          "sm:h-[120px]",
          "sm:items-center",
          "sm:justify-center",

          "md:flex-col",
          "md:w-[160px]",
          "md:h-screen",
          "md:content-center",
          "md:justify-center",

          "lg:w-full",
          "lg:items-start",
          "lg:justify-items-start",
          "lg:h-[225px]",
          "lg:pt-10",
          "lg:pb-3",
          "lg:px-[90px]",
        )}
      >
        <div className={clsx("flex", "flex-col", 'sm:justify-center', "sm:items-center", "md:justify-center", "md:items-center","lg:items-start")}>

            <Link activeClass="active" to={"#About"} spy={true} smooth={true} duration={500} offset={-300}>  
              <h1
                className={clsx(
                  "text-3xl",
                  "md:pb-5",

                  "lg:content-center",
                  "lg:text-5xl",
                  "lg:inline-block",
                  "py-3"
                )}
              >
                Optimuhs
              </h1>
            </Link>
            
            <h3 className={clsx(
              "font-thin",  "text-lg", "lg:pb-7", "md:text-center"
            )}>&#60;&#8725;Junior Developer&#62;</h3>
        </div>
       
        <div
          className={clsx(
            "p-3",
            "ml-auto",
            "mr-5",
            "cursor-pointer",
            "flex",
            "flex-col",
            "justify-center",
            "items-center",
          
            "md:hidden"
          )}
          onClick={toggleNav}
        >
          <MenuIcon
            className={clsx("w-10", "z-50", "ml-auto","md:hidden")}
          />
        </div>

        <div className={clsx("flex", "sm:flex-col", "hidden", "md:inline-block", "text-left")}>
          {getMenuLinks(-300,-230,1900)}
        </div>
      </nav>

          {/* Mobile nav */}
      <div className={toggle ? clsx("fixed", "left-0", "top-0", "h-screen", "w-full", "bg-black/70", "md:hidden" ): ""}>
        <div className={toggle ? 
          clsx("fixed", "left-0", "top-0", "w-[60%]", "h-screen", "ease-in duration-500","bg-beige", "p-10", "flex", "flex-col", "items-center",
          "md:hidden" ) : 
          clsx("fixed", "left-[-100%]", "top-0", "h-screen", "ease-in duration-500","bg-beige", "p-10", "flex", "flex-col", "items-center",
          "md:hidden" )}>
          <div className={clsx("rounded-full", "shadow-lg", "bg-beige", "p-3", "cursor-pointer", "md:hidden")}
            onClick={toggleNav}>
            <XIcon className={clsx("w-10", "ml-auto")}/>
          </div>
          <div className={clsx("flex", "sm:flex-col", "my-10", "text-2xl",
            "md:inline-block"
            )}>
              {getMenuLinks(0,0,2000)}
          </div>
        </div>
      </div>
    </div>
  )}

