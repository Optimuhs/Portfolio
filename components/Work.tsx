import clsx from "clsx";
import { FunctionComponent } from "react";
import { projectDescription1, projectDescription2, projectDescription3 } from "../ProjectDescriptions";
import { Card } from "./Card";

export const Work: FunctionComponent = () => {
  return (
    <section className={clsx("py-6")}>
      <a id="#Work"></a>
      <div>
        <h2 className={clsx("text-2xl", "bg-emerald-600", "text-stone-100", "px-6", "py-3")}>
          My work
        </h2>
      </div>

      <div className={clsx("flex", "flex-col", "justify-center", "content-center", "text-stone-100")}>
        <Card
          projectName="Web3 DApp"
          projectDescription={projectDescription1}
          imagePath="/static/dApp_SS.png"
        />
        <Card
          projectName="CS Stickers"
          projectDescription={projectDescription2}
          imagePath=""
        />
        <Card
          projectName="EmailParser"
          projectDescription={projectDescription3}
          imagePath=""
        />
      </div>
    </section>
  );
};


