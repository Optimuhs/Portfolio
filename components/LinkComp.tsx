import { clsx } from 'clsx'
import Link from 'next/link'
import { FunctionComponent, PropsWithChildren } from 'react'

interface Props {
  href: string // I prefer defining my routes in an enum and using that enum here
}

export const LinkComp: FunctionComponent<PropsWithChildren<Props>> = ({ href, children }) => {
  return (
    <li className={'p-[10px]'}>
      <div
        className={clsx(
          'absolute',
          'bottom-0',
          'left-0',
          'block',
          'h-[2px]',
          'w-full',
          'origin-top-left',
          'scale-x-0',
          'bg-black',
          'transition',
          'duration-300',
          'ease-in-out',
          'hover:scale-x-100'
        )}
      />
      <Link href={href} className={clsx(
        "relative", "before:content-['']", "before:absolute", "before:block", 
        "before:w-full", "before:h-[2px]", "before:bottom-0",
        "before:left-0", "before:bg-black", "before:hover:scale-x-100", "before:scale-x-0",
        "before:origin-top-left", "before:transition", "before:ease-in-out", "before:duration-300")}>
        {children}
      </Link>
    </li>
  )
}