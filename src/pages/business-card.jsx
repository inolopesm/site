import React from 'react'
import '@fontsource/poppins/300.css'
import { Helmet } from 'react-helmet'
import '../styles/global.css'
import * as style from '../styles/pages/business-card.module.css'
import logo from '../images/logo-main-black.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function BusinessCard() {
  return (
    <div className={style.container}>
      <Helmet>
        <html lang="pt-BR" />
        <title>inolopesm | cartão de visita</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="description" content="cartão de visita da empresa de desenvolvimento de sofware inolopesm" />
      </Helmet>
      <div className={style.header}>
        <div className={style.box}>
          <div className={style.brand}>
            <img src={logo} alt="inolopem - desenvolvedor de software" />
          </div>
          <div className={style.slogan}>Soluções em software e inovações</div>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.box}>
          <div className={style.helper}>Toque nos ícones</div>
          <div className={style.angleDown}>
            <FontAwesomeIcon icon={solid('angle-down')} />
          </div>
          <div className={style.buttonsGroup}>
            <a
              className={style.button}
              href="mailto:inolopesm@gmail.com"
            >
              <div className={style.buttonIcon}>
                <FontAwesomeIcon icon={regular('envelope')} />
              </div>
              <div className={style.buttonText}>
                inolopesm@gmail.com
              </div>
            </a>
            <a
              className={style.button}
              href="https://instagram.com/inolopesm"
            >
              <div className={style.buttonIcon}>
                <FontAwesomeIcon icon={brands('instagram')} />
              </div>
              <div className={style.buttonText}>
                @inolopesm
              </div>
            </a>
            <a
              className={style.button}
              href="https://wa.me/5583998212648"
            >
              <div className={style.buttonIcon}>
                <FontAwesomeIcon icon={brands('whatsapp')} />
              </div>
              <div className={style.buttonText}>
                +55 83 9 9821-2648
              </div>
            </a>
            <a
              className={style.button}
              href="https://inolopesm.dev"
            >
              <div className={style.buttonIcon}>
                <FontAwesomeIcon icon={solid('globe')} />
              </div>
              <div className={style.buttonText}>
                inolopesm.dev
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
