import clsx from "clsx";
import { FunctionComponent } from "react";
import AboutMe from "./About";
import Contact from "./Contact";
import { Work } from "./Work";
export const Content: FunctionComponent= () => {
    return(
        <div className={clsx("flex", "flex-col", "justify-center", "items-center", "content-center","bg-stone-100" )} >
            
            <div className={clsx(
                "lg:content-center", "justify-center",
                "lg:w-[75%]", "m-9"
            )}>
                <AboutMe/>
                <Work/>
                <Contact/>
            </div>
        </div>
    )
}

