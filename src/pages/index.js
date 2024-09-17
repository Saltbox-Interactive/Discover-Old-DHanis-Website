import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import About from './about';
import Team from './team';
import Gallery from './gallery';
import Image from "next/image";
import styles from '../styles/home.module.scss';
import TestComponent from './test';
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <div className={styles.pageFormatting}>
      {/* <img className={styles.backgroundImg} src="/assets/homeWallpaper.jpg"/> */}
      <Navbar />

      <div className={styles.container} id='home'> 
        <Head>
          <title>Explore Old D'Hanis</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1 className={styles.title}>
            <a>Welcome to Old D'Hanis</a>
          </h1>
          <div className={styles.download}>
            <Button variant="primary" size='lg'> Download on steam </Button>
          </div>
        </main>
      </div>
      
      <section id='about'>
        <About />
      </section>
      <section id='team'>
        <Team />  
      </section>
      <section id='gallery'>
        <Gallery />
      </section>
      {/* <TestComponent />  */}

      <footer className={styles.footer}></footer>
    </div>
  );
}
