import React from 'react';
import Styles from './footer.module.css';
import '../../assets/fonts/neo-sans-pro-cdnfonts/NeoSansProRegular.OTF';

export default function Footer() {
    return (
        <footer>
            <p>criado POR: ERICK CAIQUE SANTOS SOUZA - EQUIPE 1 - 2º Semestre 2023
                <br /><br />
                Instituto PROA
                <br /><br />
                Av. Brigadeiro Faria Lima, 4.0554º andar - Itaim Bibi
                04538-133 - São Paulo - SP
                <br /><br />
                contato@proa.org.br

            </p>

            <ul>
                MAPA DO SITE
                <li>AREA DO CLIENTE</li>
                <li>ATENDIMENTO</li>
                <li>PRODUTOS</li>
                <li>Quem somos</li>
                <li>Dúvidas frequentes</li>
                <li>Contato</li>
                <li>Política de privacidade</li>
                <li>Política de Cookies</li>
                <li>Termos de uso</li>
            </ul>
        </footer>
    );
}