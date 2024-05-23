import React from 'react'
import FooterLeft from './elementler/FooterLeft'
import FooterRight from './elementler/FooterRight'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.bg}>
        salam

        <FooterLeft/>
        <FooterRight/>
    </div>
  )
}

export default Footer