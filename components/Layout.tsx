import clsx from "clsx";
import { FunctionComponent } from "react";
import Navbar from "./Navbar";
const Layout: FunctionComponent = () => {
    return (
        <div className={clsx("flex", "h-screen", "flex-col", "lg:w-screen")}>
            
            <Navbar/>
            <div className={clsx("flex flex-col")}>
                {/* <Header/> */}
                {/* <Content/> */}
            </div>
            
        
           
        
        </div>
    )

}
export default Layout;