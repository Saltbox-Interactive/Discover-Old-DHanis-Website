import styles from '../styles/team.module.scss';
import InfoBox from '../components/InfoBox';

export default function Team(){
    return ( 
        <div className={styles.container}>
            <h1 className={styles.header}> The Team </h1>
            <div className={styles.underline}></div>
            <InfoBox
                imageSrc='/assets/profile-pic-default.jpg'
                altText='profile pic'
                name='Michael'
                role='Game Programmer'
                text='Text goes here'
            />
            <InfoBox
                imageSrc='/assets/profile-pic-default.jpg'
                altText='profile pic'
                name='Terry'
                role='Web Designer'
                text='Text goes here'
            />
            <InfoBox
                imageSrc='/assets/profile-pic-default.jpg'
                altText='profile pic'
                name='Emily'
                role='Art, Graphics and Marketing'
                text='Text goes here'
            />
            <InfoBox
                imageSrc='/assets/profile-pic-default.jpg'
                altText='profile pic'
                name='Trish'
                role='Prof'
                text='Text goes here'
            />
        </div>
    )
}