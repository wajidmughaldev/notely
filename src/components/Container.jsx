import React from 'react'
import clsx from 'clsx'
const Container = ({children}) => {

    

  return (
    <div className={clsx(
        'w-[90%] mx-auto'
    )}>{children}</div>
  )
}

export default Container