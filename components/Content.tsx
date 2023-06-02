import clsx from "clsx";
import { FunctionComponent } from "react";
import AboutMe from "./About";
import Contact from "./Contact";
import { Work } from "./Work";
export const Content: FunctionComponent= () => {
    return(
        <div className={clsx("flex", "flex-col", "justify-start", "items-start", "content-center","bg-beige", "w-fill", "md:px-10" , "lg:px-[90px]",)} >
            
            <div className={clsx(
                "lg:content-start", 
                "w-fill",
                
                
            )}>
                <AboutMe/>
                <Work/>
                <Contact/>
            </div>
        </div>
    )
}

