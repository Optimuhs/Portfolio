import clsx from "clsx";
import Image from "next/image";
import { FunctionComponent } from "react";

interface CardProps {
    projectDescription : string;
    projectName: string;
    imagePath: string;
}

export const Card: FunctionComponent<CardProps> = ({
    projectName,
    projectDescription,
    imagePath,
  }) => {
    

    return(
        <div className={clsx( "min-h-[450px]", "w-full",  "bg-darkGrey" , "my-5"
        )}>
            <h3 className={clsx( "text-xl", "px-6", "pt-5")}>{projectName}</h3>
            <div className={clsx( "flex", "flex-col", "justify-center", "items-center")}>    
                <p className={clsx('text-justify','p-8', "md:w-4/5")}>
                    {projectDescription}
                </p> 
                <span className={clsx("my-5", "flex", "flex-col", "align-center", "justify-center")}>
                   {imagePath && 
                   <Image src={imagePath} alt="Project screenshot" width={500} height={400}></Image> 
                   
                   }
                </span>
               
            </div>
        </div>
    );
}

