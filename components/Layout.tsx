import clsx from "clsx";
import { FunctionComponent } from "react";
import Content from "./Content";
import Navbar from "./Navbar";

const Layout: FunctionComponent = () => {
    return (
        <div className={clsx("flex", "flex-col","md:flex-row","lg:flex-col", "h-screen", "lg:w-screen")}>   
            <div className={clsx("md:min-w-[160px]", "lg:min-h-[120px]", "lg:min-w-[100%]")}>
                <Navbar/>
            </div>
             
            <div className={clsx("lg:min-h-auto", "lg:self-center",
                "md:content-center"
            )}>
                <Content/>
            </div>
            
        </div>
    )

}
export default Layout;