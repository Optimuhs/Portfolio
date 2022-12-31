import clsx from "clsx";
import { FunctionComponent } from "react";
import AboutMe from "./About";
const Content: FunctionComponent= () => {
    return(
        <div className={clsx("flex", "flex-col", "justify-center", "items-center", "content-center" )} >
            <AboutMe/>
        </div>
    )
}

export default Content;