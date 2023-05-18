import clsx from 'clsx'
import { FunctionComponent, PropsWithChildren, ReactNode } from 'react'
import { Link } from 'react-scroll'

interface Props {
  href: string
  position: number
  onStateChange: () => void
  children: ReactNode
 
}


export const LinkComp: FunctionComponent<PropsWithChildren<Props>> = ({ href, position, onStateChange, children }) => {

  const handleState = () => {
    onStateChange()
  }
  return (
    <Link activeClass="active" to={href} spy={true} smooth={true} duration={500} offset={position}>
    <li className={clsx('p-[10px]', "cursor-pointer")}  onClick={handleState} >
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
          'md:bg-stone-100',
          'bg-emerald-600',
          'transition',
          'duration-300',
          'ease-in-out',
          'hover:scale-x-100'
        )}
      />

      {children}
        
          <span className={clsx(
            "relative", "before:content-['']", "before:absolute", "before:block", 
            "before:w-full", "before:h-[2px]", "before:bottom-0",
            "before:left-0", "md:before:bg-stone-100", "before:bg-emerald-600", "before:hover:scale-x-100", "before:scale-x-0",
            "before:origin-top-left", "before:transition", "before:ease-in-out", "before:duration-300"
          )}>         
          </span>
    </li>
    </Link>
  )
}