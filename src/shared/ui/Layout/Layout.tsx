import { FC, PropsWithChildren } from 'react'

import classes from './Layout.module.css'

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}
