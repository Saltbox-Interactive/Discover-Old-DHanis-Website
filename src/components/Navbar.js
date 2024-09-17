import React from 'react';
import Link from 'next/link'; // Import Next.js's Link
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li className={styles.homeLogo}>
          <Link href="#home" className={styles.homeLogo}>Old D'Hanis</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="#gallery" className={styles.navLink}>Gallery</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="#team" className={styles.navLink}>Team</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="#about" className={styles.navLink}>About</Link>
        </li>
    </ul>
    </nav>
  );
};


export default Navbar;


        // <div className={styles.header}>
        //   <div className={styles.homeLogo}>
        //     <h1>Old D'Hanis</h1>
        //   </div>
        //   <div className={styles.menuItemsContainer}>
        //     <Button variant="primary" className={styles.menuItems} as="a">Gallery</Button>
        //     <Button variant="primary" className={styles.menuItems} as="a">Team</Button>
        //     <Button variant="primary" className={styles.menuItems} as="a">About</Button>
        //   </div>
        // </div>