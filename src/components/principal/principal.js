import React from 'react';
import Styles from './principal.module.css';
import '../../assets/fonts/neo-sans-pro-cdnfonts/NeoSansProRegular.OTF';
import Arrow from '../../assets/img/arrow.gif'
export default function Principal(){
    return(
        
        <section className={Styles.section1}>
            <img src={Arrow} alt="arrow" className={Styles.arrow}/>
        </section>
    );
}