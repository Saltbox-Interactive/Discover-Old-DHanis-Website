import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import About from './about';
import Team from './team';
import Gallery from './gallery';



export default function Home() {
  return (
    // This will be overarching container
    <div >
      <div className={styles.container}> 
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className={styles.header}>
          <div className={styles.homeLogo}>
            <h1>Old D'Hanis</h1>
          </div>

          <div className={styles.menuItems}>
            <Button as="a" variant="primary">About</Button>
            <Button as="a" variant="primary">Team</Button>
            <Button as="a" variant="primary">Gallery</Button>
          </div>
        </div>
      </header>

      <main>
        <h1 className={styles.title}>
          <a>Welcome to Old D'Hanis</a>
        </h1>
        <div className={styles.downLoad}>
          <Button>Download on steam</Button>
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
