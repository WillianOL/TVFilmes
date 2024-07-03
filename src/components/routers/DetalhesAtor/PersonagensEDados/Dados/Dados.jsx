import React from 'react'
import style from './style.module.scss'
import { IoMdPerson } from "react-icons/io";
import { FaTransgender, FaCity } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

const Dados = ({dados}) => {
  let genero = dados.gender;
  if(genero === 0) {
    genero = 'Não especificado.'
  } else if(genero === 1) {
    genero = 'Feminino'
  } else if(genero === 2) {
    genero = 'Masculino'
  } else {
    genero = 'Não binário'
  }

  return (
    <div className={style.conteinerDados}>
      <h2 className={style.tituloDados}>Informações Pessoais</h2>
      <ul className={style.dados}>
        <li>
          <h3>Conhecido(a) por: <IoMdPerson /></h3>
          <p>{dados.known_for_department}</p>
        </li>
        <li>
          <h3>Gênero: <FaTransgender /></h3>
          <p>{genero}</p>
        </li>
        <li>
          <h3>Nascimento: <BsCalendar2DateFill /></h3>
          <p>{dados.birthday}</p>
        </li>
        <li>
          <h3>Local de nascimento: <FaCity /></h3>
          <p>{dados.place_of_birth}</p>
        </li>
        <li>
          <h3>Também conhecido(a) como: <BiWorld /></h3>
          {dados.also_known_as.map(item => <p key={item}>{item}</p>)}
        </li>
      </ul>
    </div>
  )
}

export default Dados
