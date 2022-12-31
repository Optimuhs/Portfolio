import clsx from "clsx";
import { FunctionComponent } from "react";
import Content from "./Content";
import Navbar from "./Navbar";

const Layout: FunctionComponent = () => {
    return (
        <div className={clsx("flex", "h-screen", "flex-col","lg:w-screen")}>   
            <div>
                <Navbar/>
            </div>
             
            <div className={clsx()}>
                <Content/>
            </div>
            
        
           
        
        </div>
    )

}
export default Layout;