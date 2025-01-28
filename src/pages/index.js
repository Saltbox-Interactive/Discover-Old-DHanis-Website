import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import About from './about';
import Team from './team';
import Gallery from './gallery';
import styles from '../styles/home.module.scss';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div className={styles.pageFormatting}>
      <Navbar />
      <div className={styles.container} id='home'> 
        <div className={styles.video}>
          <img
            className={styles.backgroundImg}
            src="/assets/background_pic.svg"
            alt="Background"
          />
        </div>
        <Head>
            <title>Discover Old D'Hanis</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              <a>Discover. Learn. Preserve.</a>
            </h1>
          </div>
          <div className={styles.download}>
            <a 
              href="https://store.steampowered.com/app/3140860/Discover_Old_DHanis/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg" className={styles.brownbutton}>
                Play on Steam
              </Button>
            </a>
          </div>
        </main>
      </div>
      
      <section id='about'>
        <About />
      </section>
      <section id='gallery'>
        <Gallery />
      </section>
      <section id='team'>
        <Team />  
      </section>
      <Footer />  
    </div>
  );
}
