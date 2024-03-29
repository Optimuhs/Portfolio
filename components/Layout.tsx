import clsx from 'clsx';
import { FunctionComponent, ReactNode } from 'react';
import { Content } from './Content';
import { Navbar } from './Navbar';

interface Props {
  children: ReactNode;
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={clsx("flex", "flex-col", "md:flex-row", "lg:flex-col", "h-screen", "lg:w-screen")}>
      <div className={clsx("md:min-w-[160px]", "lg:min-h-[225px]", "lg:w-screen")}>
        <Navbar />
      </div>
      <div className={clsx("lg:min-h-auto", "lg:self-start", "md:content-center",)}>
        <Content />
      </div>
    </div>
  )
}
