import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <ul>
        <li className={styles.homeLogo}>
          <Link href="#home" className={styles.homeLogo}>Discover Old D'Hanis</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="#contact" className={styles.navLink}>Contact</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="#team" className={styles.navLink}>Team</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="#gallery" className={styles.navLink}>Gallery</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="#about" className={styles.navLink}>About</Link>
        </li>
    </ul>
    </nav>
  );
};

export default Navbar;
