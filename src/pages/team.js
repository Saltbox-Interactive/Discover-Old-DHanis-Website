import styles from '../styles/team.module.scss';
import InfoBox from '../components/InfoBox';

export default function Team(){
    return ( 
        <div className={styles.container}>
            <h1> The Team (WIP, will finish styling later)</h1>
            <InfoBox
                imageSrc='/assets/potato_placeholder.png'
                altText='profile pic'
                name='Michael'
                role='Game Programmer'
                text='Text goes here'
            />
            <InfoBox
                imageSrc='/assets/potato_placeholder.png'
                altText='profile pic'
                name='Terry'
                role='Web Designer'
                text='Text goes here'
            />
            <InfoBox
                imageSrc='/assets/potato_placeholder.png'
                altText='profile pic'
                name='Emily'
                role='Art, Graphics and Marketing'
                text='Text goes here'
            />
            <InfoBox
                imageSrc='/assets/potato_placeholder.png'
                altText='profile pic'
                name='Trish'
                role='Prof'
                text='Text goes here'
            />
        </div>
    )
}