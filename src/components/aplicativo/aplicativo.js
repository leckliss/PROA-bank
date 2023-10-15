import {React, useEffect} from 'react';
import Styles from './aplicativo.module.css';
import '../../assets/fonts/neo-sans-pro-cdnfonts/NeoSansProRegular.OTF';
import Carteira from '../../assets/img/carteira.png';
import Aulas from '../../assets/img/aulas.png';
import Grafico from '../../assets/img/grafico.png';
import App1 from '../../assets/img/app1.png';

//animações
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aplicativo() {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <section className={Styles.section2}>
            <div className={Styles.articles}>
                <article data-aos="fade-down">
                    <img src={Carteira} alt="Carteira Icon" />
                    <h2>Carteira e Conta Digital</h2>
                </article>
                <article data-aos="fade-down">
                    <img src={Aulas} alt="Video Player Icon" />
                    <h2>Aulas de Educação Financeira</h2>
                </article>
                <article data-aos="fade-down">
                    <img src={Grafico} alt="Grafico de Pizza Icon" />
                    <h2>Gráficos Educacionais</h2>
                </article>
            </div>
            <h1 className={Styles.titulos}>Sua Instituição favorita agora também te ajuda a gerenciar sua vida financeira</h1>

            <div className={Styles.aplicativo}>

                <div className={Styles.apptext}>
                    <div className={Styles.apptext1}>
                        <h3>Apesar do nome PROA bank somos a junção de carteira digital e conta digital, uma nova maneira de realizar pagamentos com consciência, mesmo com pouco dinheiro, te mostraremos como você pode economizar e investir!</h3>
                    </div>
                    <div className={Styles.apptext2} data-aos='fade-up-right' data-aos-duration="500" >
                        <h1>Um Mega App completo para te ajudar no dia-a-dia</h1>
                        <h3>Conta digital, controle de cartões com Carteira Digital, investimentos, aulas, gráficos de controle financeiro e muito mais.
                            Tudo isso sem mudar de aplicativo.</h3>
                    </div>
                </div>

                <div className={Styles.appimg} >
                    <img src={App1} alt="Imagem de um smartphone com o aplicativo do PROA bank em tela, ao fundo o cartão do PROA bank" data-aos='fade-up-left' data-aos-duration="500" />
                </div>
            </div>
        </section>
    );
}