import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import About from './about';
import Team from './team';
import Gallery from './gallery';
import Image from "next/image";

export default function Home() {
  return (
    // This will be overarching container
    
    <div className={styles.pageFormatting}>
      <img className={styles.backgroundImg} src="/assets/homeWallpaper.jpg"/>

      <header>
        <div className={styles.header}>
          <div className={styles.homeLogo}>
            <h1>Old D'Hanis</h1>
          </div>

          <div className={styles.menuItemsContainer}>
            <Button variant="light" className={styles.menuItems} as="a">About</Button>
            <Button variant="light" className={styles.menuItems} as="a">Team</Button>
            <Button variant="light" className={styles.menuItems} as="a">Gallery</Button>
          </div>
        </div>
      </header>

      <div className={styles.container}> 
        <Head>
          <title>Explore Old D'Hanis</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
         
          <h1 className={styles.title}>
            <a>Welcome to Old D'Hanis</a>
          </h1>
          <div className={styles.download}>
            <Button variant="light" size='lg'> Download on steam </Button>
          </div>
        </main>
      </div>

      <About></About>
      <Team></Team>
      <Gallery></Gallery>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
