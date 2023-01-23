import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { FunctionComponent } from "react";

const Contact:FunctionComponent = () => {
    return(
            <section className={clsx("m-[20px]", "flex", "flex-col", "content-center","items-center")}>
                <div className={clsx("flex", "flex-row", "space-x-5")}>        
                    <p><FontAwesomeIcon icon={faTwitter} className={"fa-2x"}/></p>
                    <p><FontAwesomeIcon icon={faGithub} className={"fa-2x"}/></p>    
                </div>

                
            
            </section>
    )
}

export default Contact