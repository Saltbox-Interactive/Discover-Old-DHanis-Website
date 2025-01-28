import styles from '../components/About/About.module.scss';
import AboutSection from '../components/About/AboutSection';

const sections = [
    {
        text: `Discover Old D'Hanis is an immersive educational experience that invites you to explore the history of the old town of D’Hanis, TX. The game is based on data from the Old D’Hanis Archaeological Mapping Project, a real archaeological project that examined the ruins, stories, and landscapes of the historic town, alongside community members, in 2018.`,
        image: { src: '/assets/acheivments/Archeologist.svg', alt: 'Archaeologist' },
    },
    {
        text: `Enter D’Hanis and you will find yourself in front of the ruin of its Catholic church, grass beneath your feet, the sound of wind and the occasional bird in a landscape empty of people. You stand at the intersection of past and present. Walking through the historic streets, you will find virtual reconstructions of white-walled cottages from the 19th century alongside 21st century ruins scanned by archaeologists.`,
        image: { src: '/assets/acheivments/Blacksmith.svg', alt: 'Blacksmith' },
    },
    {
        text: `Scattered throughout the landscape are pieces of D’Hanis’ story – a 19th century photograph, archaeological field notes, a quote from an oral history, a newspaper article. Alone, these provide small snapshots of the town or the archaeological project through time. Together, they paint a fuller picture of D’Hanis and its residents, from the Alsatian and German migrants who founded the town in 1847 to the Black and Mexican families who made it their home following the Civil War and Mexican Revolution. Your role: to explore, to collect fragments, and to piece together the stories of the Old D’Hanis.`,
        image: { src: '/assets/acheivments/Traveler.svg', alt: 'Traveler' },
    },
    {
        text: `Based on the history of a real Texas town, Discover Old D’Hanis features 3D models of ruins, historically-informed landscape and sound design, interactive features, artistic reconstructions, and an original musical composition based on old German folk songs. It provides a glimpse into a real archaeology project and demonstrates how we come to understand the past through its fragments.`,
        image: { src: '/assets/acheivments/Engineer.svg', alt: 'Engineer' },
    },
    {
        text: `Discover Old D'Hanis is more than just a game; it’s an invitation to join the efforts preserve and share the historical legacy of an historic place. Are you ready to uncover the stories and experience the old town?`,
        image: { src: '/assets/acheivments/Storyteller.svg', alt: 'Storyteller' },
    },
];

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <h1 className={styles.title}>What is Discover Old D'Hanis?</h1>
                <div className={styles.aboutText}>
                    {sections.map((section, index) => (
                        <AboutSection
                            key={index}
                            text={section.text}
                            image={section.image}
                            reverse={index % 2 === 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
