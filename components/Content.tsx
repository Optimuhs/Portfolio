import clsx from "clsx";
import { FunctionComponent } from "react";
import AboutMe from "./About";
import Contact from "./Contact";
import Work from "./Work";
const Content: FunctionComponent= () => {
    return(
        <div className={clsx("flex", "flex-col", "justify-center", "items-center", "content-center" )} >
            
            <div className={clsx("border-[2px] border-l-amber-900",
                "lg:content-center", "justify-center",
                "lg:w-[75%]"
            )}>
                <AboutMe/>
                <Work/>
                <Contact/>
            </div>
        </div>
    )
}

export default Content;