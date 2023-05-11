import clsx from 'clsx'
import { FunctionComponent } from 'react'
import ReactLoading from 'react-loading'

export const LoadingPlaceholder: FunctionComponent = () => {
  return (
    <div className={clsx('flex', 'flex-row', 'self-stretch', 'justify-center')}>
      <ReactLoading type={'spin'} />
    </div>
  )
}
