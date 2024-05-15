import React from 'react'
import './style.scss'

const Seletores = ({children}) => {
  return (
    <ul className='seletores'>
      {children}
    </ul>
  )
}

export default Seletores
