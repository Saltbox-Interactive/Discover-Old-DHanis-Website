import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Home() {
  return (
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  );
}
