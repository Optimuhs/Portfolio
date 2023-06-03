import clsx from "clsx";
import Image from "next/image";
import { FunctionComponent } from "react";

interface CardProps {
    projectDescription : string;
    projectTools: string;
    projectName: string;
    imagePath: string;
    webLink:string
}

export const Card: FunctionComponent<CardProps> = ({
    projectName,
    projectDescription,
    projectTools,
    imagePath,
    webLink
  }) => {
    

    return(
        <div className={clsx( "min-h-[300px]", "w-full" , "my-5", "text-darkGrey", "flex", "flex-col", "md:flex-row", "justify-center", "items-center"
        )}>
             <span className={clsx("flex", "flex-col", "my-5", "items-center", "justify-center", "h-fill", "w-fill", "shadow-lg" )}>
                   {imagePath && 
                   <a href={webLink}><Image src={imagePath} alt="Project screenshot" width={500} height={300}></Image> </a>
                   
                   }
            </span>
            <div className={clsx( "flex", "flex-col", "w-11/12", 'p-5')}>
                <h3 className={clsx( "text-xl", "pb-5", "underline")}>{projectName}</h3>
                <div >    
                    <p className={clsx('text-justify')}>
                        {projectDescription}
                    </p> 
                    <br/>
                    <p>{projectTools}</p>
                </div>
            </div>
            
        </div>
    );
}

