import { React, useState, useEffect } from 'react';
import Styles from './header.module.css';
import '../../assets/fonts/neo-sans-pro-cdnfonts/NeoSansProRegular.OTF';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            const scrollTop = window.pageYOffset;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            };
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); 
        };

    }, []);
    
    return (
        <header className={`${scrolled ? Styles.scrolled : ""}`}>
            <nav>
                <div className={`${Styles.logo} ${scrolled ? Styles.scrolledlogo : ""}`}></div>
                <ul>
                    <li>Produtos</li>
                    <li>Institucional</li>
                    <li>Atendimento</li>
                    <li>Área do Cliente</li>
                </ul>
            </nav>
        </header>
    );
}