import React from 'react'

const Seletor = ({children, valor, ...props}) => {
  return (
    <li className={valor === valor ? 'selecionado' : ''} {...props}>
      {children}
    </li>
  )
}

export default Seletor
