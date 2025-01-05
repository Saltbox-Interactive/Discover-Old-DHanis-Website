import styles from '../styles/team.module.scss';
import InfoBox from '../components/InfoBox';

export default function Team(){
    return ( 
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1 className={styles.header}> The Team </h1>
                <div className={styles.underline}></div>
            </div>
            <InfoBox
                imageSrc='/assets/dod-logo.png'
                altText='profile pic'
                name='Dr. Patricia Markert'
                role='Supervisor, Researcher, Professor'
                text='Text goes here'
            />
            <InfoBox
                imageSrc='/assets/dod-logo.png'
                altText='profile pic'
                name='Michael Salton'
                role='Programming, Enviroment Design'
                text='Text goes here'
            />
            <InfoBox
                imageSrc='/assets/dod-logo.png'
                altText='profile pic'
                name='Emily Grant'
                role='Art, Modelling'
                text='Text goes here'
            />
            <InfoBox
                imageSrc='/assets/joyce.png'
                altText='profile pic'
                name='Hiu Lee Joyce'
                role='Music, Sound'
                text='Text goes here'
            />
            <InfoBox
                imageSrc='/assets/dod-logo.png'
                altText='profile pic'
                name='Terry Ju'
                role='Web'
                text='Text goes here'
            />
        </div>
    )
}