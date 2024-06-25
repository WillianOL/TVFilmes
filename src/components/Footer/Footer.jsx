import React from 'react';
import { Link } from 'react-router-dom';
import { PiFilmSlateFill } from 'react-icons/pi';
import { FaCode } from 'react-icons/fa';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import style from './style.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <article className={style.informacoes}>
        <div className={style.logo}>
          <Link to="/">
            <h2>
              TV<span>Filmes</span> <PiFilmSlateFill />
            </h2>
          </Link>
          <p>Diversão garantida, cinema sem limites!</p>
        </div>
        <div className={style.redes}>
          <h2>
            Dev <FaCode />
          </h2>
          <div>
            <a
              href="https://www.linkedin.com/in/willian-oliveira-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/WillianOL"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/_willian67/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </article>
      <article className={style.copyright}>
        <p>
          ©Copyright 2024. Projeto feito com intuito de aprendizado, por{' '}
          <a
            href="https://www.linkedin.com/in/willian-oliveira-dev/"
            target="_blank"
            rel="noreferrer"
          >
            Willian Oliveira.
          </a>
        </p>
      </article>
    </footer>
  );
};

export default Footer;
