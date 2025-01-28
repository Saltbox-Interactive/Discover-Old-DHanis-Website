import Image from 'next/image';
import styles from './About.module.scss';

export default function AboutSection({ text, image, reverse }) {
    return (
        <div className={styles.infoSection} >
            <p className={reverse ? styles.floatRight : styles.floatLeft}>
                {text}
            </p>
            <div className={reverse ? styles.floatLeft : styles.floatRight}>
                <Image
                    className={styles.imageIcon}
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={200}
                />
            </div>
        </div>
    );
}