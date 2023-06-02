import clsx from "clsx";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => { 
    return (
        <div className={clsx("flex flex-row items-center justify-center h-[200px] w-full")}>
            {/* <h2 className={clsx("p-[25px] text-3xl")}>Optimuhs</h2> */}
            
        </div>
    );

}
export default Header;
