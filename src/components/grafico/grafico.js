import React from 'react';
import Styles from './grafico.module.css';
import '../../assets/fonts/neo-sans-pro-cdnfonts/NeoSansProRegular.OTF';
import GraficoCelular from '../../assets/img/graficotelefone.png';

export default function Grafico() {
    return (
        <section className={Styles.section4}>
            
            <h1 className={Styles.titulos}>Uma CARTEIRA DIGITAL feita de proanes para proanes</h1>

            <div className={Styles.graficocelular}>

                    <img src={GraficoCelular} alt="Imagem de um smartphone com o aplicativo do PROA bank em tela, ao fundo o cartão do PROA bank na aba de Carteira Digital" data-aos='fade-up-right' data-aos-duration="1000"  />
                    <div className={Styles.controlegastos}>Tenha um controle de gastos rápido e prático para um melhor gerenciamento e organização</div>
            </div>
        </section>
    );
}