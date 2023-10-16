import React, { useRef } from 'react';
import Styles from './principal.module.css';
import '../../assets/fonts/neo-sans-pro-cdnfonts/NeoSansProRegular.OTF';
import Arrow from '../../assets/img/arrow.gif';

export default function Principal() {
  const aplicativoRef = useRef(null);

  const handleArrowClick = () => {
    if (aplicativoRef.current) {
      aplicativoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={Styles.section1} ref={aplicativoRef}>
      <img src={Arrow} alt="seta" className={Styles.arrow} onClick={handleArrowClick} />
    </section>
  );
}
