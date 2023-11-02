import clsx from "clsx";
import { FunctionComponent } from "react";
import { project1Tools, project2Tools, project3Tools, project4Tools, projectDescription1, projectDescription2, projectDescription3, projectDescription4 } from "../ProjectDescriptions";
import { Card } from "./Card";

export const Work: FunctionComponent = () => {
  return (
    <section className={clsx("py-6", "px-5", "md:px-0")}>
      <a id="#Work"></a>
      <div>
        <h2 className={clsx("text-4xl", "text-darkGrey", "py-3", "underline" )}>
          Projects
        </h2>
      </div>

      <div className={clsx("flex", "flex-col", "justify-center", "content-center", "text-stone-100")}>
      <Card
          projectName="Library Rework"
          projectDescription={projectDescription4}
          projectTools={project4Tools}
          imagePath="/static/Library_SS.png"
          webLink="#"
        />
        <Card
          projectName="Web3 DApp"
          projectDescription={projectDescription1}
          projectTools={project1Tools}
          imagePath="/static/dApp_SS.png"
          webLink="https://web3dapp-git-master-franciscoj14m-gmailcom.vercel.app/"
        />
        <Card
          projectName="CS Stickers"
          projectDescription={projectDescription2}
          projectTools={project2Tools}
          imagePath=""
          webLink="#"
        />
        <Card
          projectName="EmailParser"
          projectDescription={projectDescription3}
          projectTools={project3Tools}
          imagePath=""
          webLink="#"
        />
      </div>
    </section>
  );
};


