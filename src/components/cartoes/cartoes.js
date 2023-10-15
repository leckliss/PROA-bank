import { React, useEffect } from 'react';
import Styles from './cartoes.module.css';
import '../../assets/fonts/neo-sans-pro-cdnfonts/NeoSansProRegular.OTF';
import cartoes1 from '../../assets/img/cartoes1.png';
import cartoes2 from '../../assets/img/cartoes2.png';
import cartoes3 from '../../assets/img/cartoes3.png';
import cartoes4 from '../../assets/img/cartoes4.png';


//animações
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Cartoes() {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <section className={Styles.section3}>

            <h1 className={Styles.titulos}>Temos o único cartão que é personalizado totalmente por você</h1>

            <div className={Styles.cartoes1}>
                <img src={cartoes1} alt="imagem cartoes proa" data-aos='fade-up-right' />
                <div className={Styles.aosolicitar}>Ao solicitar o cartão você poderá personalizar seu PROA Card</div>
                <img src={cartoes2} alt="imagem cartoes proa" data-aos='fade-up-left' />
            </div>
            <div className={Styles.cartoes2}>
                <img src={cartoes3} alt="imagem cartoes proa" data-aos='fade-up-right' />
                <div>
                    <div className={Styles.desdeascores}>Desde as cores do cartão, até a posição e tamanho dos itens</div>
                    <div className={Styles.faltoucriatividade}>Faltou criatividade?
                        Sem problemas, você poderá optar pelas opções já pré definidas.</div>
                </div>
                <img src={cartoes4} alt="imagem cartoes proa" data-aos='fade-up-left' />
            </div>
        </section>
    );
}