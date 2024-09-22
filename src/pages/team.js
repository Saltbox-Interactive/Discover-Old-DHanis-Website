import styles from '../styles/team.module.css';
import InfoBox from '../components/InfoBox';

export default function Team(){
    return ( 
        <div className={styles.container}>
            <h1> This will be the team page</h1>
            <InfoBox
                imageSrc='/src/images/potato_placeholder.png'
                altText='profile pic'
                name='Terry'
                role='Web Designer'
                text='Text goes here'
            />
             <InfoBox
                imageSrc='/src/images/potato_placeholder.png'
                altText='profile pic'
                name='Michael'
                role='Game Programmer'
                text='Text goes here'
            />
             <InfoBox
                imageSrc='/src/images/potato_placeholder.png'
                altText='profile pic'
                name='Emily'
                role='Art and Design and Marketing or something'
                text='Text goes here'
            />
             <InfoBox
                imageSrc='/src/images/potato_placeholder.png'
                altText='profile pic'
                name='Trish'
                role='Prof'
                text='Text goes here'
            />
        </div>
    )
}