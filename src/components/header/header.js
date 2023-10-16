import React, { useState, useEffect } from 'react';
import Styles from './header.module.css';
import '../../assets/fonts/neo-sans-pro-cdnfonts/NeoSansProRegular.OTF';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 780);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 780);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`${scrolled ? Styles.scrolled : ''}`}>
      <nav>
        <div className={`${Styles.logo} ${scrolled ? Styles.scrolledlogo : ''}`} />
        {isMobile ? (
          <div className={Styles.hamburgerMenu} onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`${Styles.hamburger} ${menuOpen ? Styles.hamburgerOpen : ''}`} />
            <div className={`${Styles.hamburger} ${menuOpen ? Styles.hamburgerOpen : ''}`} />
            <div className={`${Styles.hamburger} ${menuOpen ? Styles.hamburgerOpen : ''}`} />
          </div>
        ) : (
          <ul>
            <li>Produtos</li>
            <li>Institucional</li>
            <li>Atendimento</li>
            <li>Área do Cliente</li>
          </ul>
        )}
      </nav>
      {isMobile && menuOpen && (
        <ul className={Styles.mobileMenu}>
          <li>Produtos</li>
          <li>Institucional</li>
          <li>Atendimento</li>
          <li>Área do Cliente</li>
        </ul>
      )}
    </header>
  );
}
