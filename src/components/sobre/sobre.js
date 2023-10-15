import React from 'react';
import Styles from './sobre.module.css';
import '../../assets/fonts/neo-sans-pro-cdnfonts/NeoSansProRegular.OTF';
import FotoSobre from '../../assets/img/sobre.png';

export default function Sobre() {
    return (
        <section className={Styles.section4}>

            <div className={Styles.sobres}>

                    <img src={FotoSobre} alt="Imagem de proanos" data-aos='fade-up-right' data-aos-duration="500"  />
                    <div className={Styles.sobreproa}>
                        <h2>Sobre o PROA</h2>
                        <h3>O Instituto PROA nasceu em 2007 com o objetivo de criar oportunidades de desenvolvimento pessoal e profissional para jovens de baixa renda vindos de escola pública, ajudando-os a se tornarem protagonistas de suas próprias histórias e ingressarem no mercado de trabalho.</h3>
                    </div>
            </div>

            <h1 className={Styles.titulos}>Porque o PROA é muito mais que uma instituição de ensino</h1>
        </section>
    );
}