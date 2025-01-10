import styles from '../styles/about.module.scss';
import Image from 'next/image';

const images = [
    { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/acheivments/Archeologist.png', alt: 'Archaeologist' },
    { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/acheivments/Blacksmith.png', alt: 'Blacksmith' },
    { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/acheivments/Traveler.png', alt: 'Traveler' },
    { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/acheivments/Engineer.png', alt: 'Engineer' },
    { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/acheivments/Storyteller.png', alt: 'Storyteller' },
];

export default function About() {
    return ( 
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <h1 className={styles.title}>What is Discover Old D'Hanis?</h1>
                <div className={styles.aboutText}>
                    <div className={styles.infoSection}>
                        <p className={styles.floatLeft}>
                        Discover Old D'Hanis is an immersive educational experience that invites you to explore the history of the old town of D’Hanis, TX. The game is based on data from the Old D’Hanis Archaeological Mapping Project, a real archaeological project that examined the ruins, stories, and landscapes of the historic town, alongside community members, in 2018.                        </p>                
                        <div className={styles.floatRight}>
                            <Image
                                className={styles.imageIcon}
                                src={images[0].src}
                                alt={images[0].alt}
                                width={200}  // Add width and height
                                height={200}
                            />
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <p className={styles.floatRight}>
                        Enter D’Hanis and you will find yourself in front of the ruin of its Catholic church, grass beneath your feet, the sound of wind and the occasional bird in a landscape empty of people. You stand at the intersection of past and present. Walking through the historic streets, you will find virtual reconstructions of white-walled cottages from the 19th century alongside 21st century ruins scanned by archaeologists.                        </p>                
                        <div className={styles.floatLeft}>
                            <Image
                                className={styles.imageIcon}
                                src={images[1].src}
                                alt={images[1].alt}
                                width={200}  // Add width and height
                                height={200}
                            />
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <p className={styles.floatLeft}>
                        Scattered throughout the landscape are pieces of D’Hanis’ story – a 19th century photograph, archaeological field notes, a quote from an oral history, a newspaper article. Alone, these provide small snapshots of the town or the archaeological project through time. Together, they paint a fuller picture of D’Hanis and its residents, from the Alsatian and German migrants who founded the town in 1847 to the Black and Mexican families who made it their home following the Civil War and Mexican Revolution. Your role: to explore, to collect fragments, and to piece together the stories of the Old D’Hanis.                        </p>
                        <div className={styles.floatRight}>
                            <Image
                                className={styles.imageIcon}
                                src={images[2].src}
                                alt={images[2].alt}
                                width={200}  // Add width and height
                                height={200}
                            />
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <p className={styles.floatRight}>   
                        Based on the history of a real Texas town, Discover Old D’Hanis features 3D models of ruins, historically-informed landscape and sound design, interactive features, artistic reconstructions, and an original musical composition based on old German folk songs. It provides a glimpse into a real archaeology project and demonstrates how we come to understand the past through its fragments.                        </p>
                        <div className={styles.floatLeft}>
                            <Image
                                className={styles.imageIcon}
                                src={images[3].src}
                                alt={images[3].alt}
                                width={200}  // Add width and height
                                height={200}
                            />
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <p className={styles.floatLeft}>
                        Discover Old D'Hanis is more than just a game; it’s an invitation to join the efforts preserve and share the historical legacy of an historic place. Are you ready to uncover the stories and experience the old town?                        </p>
                        <div className={styles.floatRight}>
                            <Image
                                className={styles.imageIcon}
                                src={images[4].src}
                                alt={images[4].alt}
                                width={200}  // Add width and height
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
