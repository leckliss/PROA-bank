import React from 'react';
import Styles from './principal.module.css';
import '../../assets/fonts/neo-sans-pro-cdnfonts/NeoSansProRegular.OTF';
import Arrow from '../../assets/img/arrow.gif'


export default function Principal(){
    return(
        
        <section className={Styles.section1}>
            <div id='recaptcha' class="g-recaptcha" data-sitekey="CHAVE DO SITE" data-callback="sendForm" data-size="invisible"></div>
            <img src={Arrow} alt="arrow" className={Styles.arrow}/>
        </section>
    );
}