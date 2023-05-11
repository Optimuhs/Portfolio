import clsx from "clsx";
import Image from "next/image";
import { FunctionComponent } from "react";
const Card: FunctionComponent = ({props}) => {
    return(
        <div className={clsx( "min-h-[450px]", "w-full",  "bg-emerald-600" , "my-5"
        )}>
            <h3 className={clsx( "text-xl", "px-6", "pt-5")}>{props.projectName}</h3>
            <div className={clsx( "flex", "flex-col", "justify-center", "items-center")}>    
                <p className={clsx('text-justify','p-8', "md:w-4/5")}>
                    {props.projectDescription}
                </p> 
                <span className={clsx("my-5", "flex", "flex-col", "align-center", "justify-center")}>
                    <Image src={"/static/dApp_SS.png"} alt="Project screenshot" width={500} height={400}></Image>
                </span>
               
            </div>
        </div>
    );
}

export default Card;