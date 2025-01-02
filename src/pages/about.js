import styles from '../styles/about.module.scss';
import Button from 'react-bootstrap/Button';


const images = [
    { src: '/assets/dod-screenshot-1.png', alt: 'Gallery image 1' },
    { src: '/assets/dod-screenshot-2.png', alt: 'Gallery image 2' },
    { src: '/assets/dod-screenshot-3.png', alt: 'Gallery image 3' },
    { src: '/assets/dod-screenshot-4.png', alt: 'Gallery image 4' },
    { src: '/assets/dod-screenshot-5.png', alt: 'Gallery image 5' },
  ];

export default function About(){
    return ( 
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <h1 className={styles.title}>What is Discover Old D'Hanis?</h1>
                <div className={styles.aboutText}>

                    <div className={styles.infoSection}>
                        <p className={styles.floatLeft}>
                        Discover Old D'Hanis is an educational and immersive historical experience that invites you to explore the rich and 
                        diverse history of the real-life town of D'Hanis, Texas. 
                        Step back into the 19th century and embark on a captivating journey through a meticulously recreated town, 
                        where each corner tells a story of its past inhabitants.
                        </p>                
                        <div className={styles.floatRight}>
                            <img className={styles.imageIcon} src={images[0].src} alt={images[0].alt} />
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <p className={styles.floatRight}>
                        In Discover Old D'Hanis, you'll traverse the streets of this historical town, 
                        uncovering the narratives of its early settlers. From the Alsatian and German migrants who 
                        founded the town in 1847 to the Black and Mexican families who made it their home following the 
                        Civil War and Mexican Revolution, the game offers a deep dive into the lives of those who shaped D'Hanis.
                        The town is brought to life using an impressive blend of archival records, archaeological discoveries, architectural details, 
                        and oral history recordings.
                        </p>                
                        <div className={styles.floatLeft}>
                            <img className={styles.imageIcon} src={images[1].src} alt={images[1].alt} />
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <p className={styles.floatLeft}>
                        As you explore, you’ll take on the role of a historical detective. 
                        Delve into a wealth of interactive elements, including archaeological photos, field notes, 
                        and artifacts that provide insights into the town’s history. Wander through ruins and examine interactive 
                        exhibits to uncover hidden stories and solve historical puzzles based on actual events. Each piece of information 
                        you gather helps to weave together the complex tapestry of D'Hanis's past.
                        </p>
                        <div className={styles.floatRight}>
                            <img className={styles.imageIcon} src={images[2].src} alt={images[2].alt} />
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <p className={styles.floatRight}>   
                        The game allows you to witness the transformation of Old D'Hanis over time. From its early settlement days 
                        through various historical periods, you'll see how the town changed and developed. The meticulous research used 
                        in the game create an authentic atmosphere that immerses you in the vibrant history of this unique community.
                        </p>
                        <div className={styles.floatLeft}>
                            <img className={styles.imageIcon} src={images[3].src} alt={images[3].alt} />
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <p className={styles.floatLeft}>
                        Discover Old D'Hanis is more than just a game; it’s an invitation to preserve and share the historical 
                        legacy of a remarkable town. Are you ready to uncover its secrets and experience the old town? The journey through Old D'Hanis awaits!
                        </p>
                        <div className={styles.floatRight}>
                            <img className={styles.imageIcon} src={images[4].src} alt={images[4].alt} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}