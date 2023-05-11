import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { FunctionComponent } from "react";

const Contact:FunctionComponent = () => {
    return(
            <section id={"#Contact"}className={clsx("m-[20px]", "flex", "flex-col", "content-center","items-center")}>
                <p className={clsx("my-2")}>Find me on these social applications:</p>
                <div className={clsx( "flex", "flex-row", "justify-center", "space-x-5", "my-5")}>    
                    <p><FontAwesomeIcon icon={faTwitter} className={"fa-2x"}/></p>
                    <p><FontAwesomeIcon icon={faGithub} className={"fa-2x"}/></p>
                    <p><FontAwesomeIcon icon={faLinkedin} className={"fa-2x"}/></p>     
                </div>
                <p> or email me directly to ... optimuhs7@gmail.com</p>

                

            </section>
    )
}

export default Contact