import styles from '../styles/about.module.scss';
import Button from 'react-bootstrap/Button';

export default function About(){
    return ( 
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <h1 className={styles.title}> About Old D'Hanis</h1>
                <div className={styles.aboutText}>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <Button className={styles.button} size='lg'> View More Resources </Button>
            </div>
           
            <div className={styles.aboutImage}>
                
            </div>
        </div>
    )
}