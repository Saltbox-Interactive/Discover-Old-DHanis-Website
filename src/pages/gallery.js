import Image from 'next/image';
import styles from '../styles/gallery.module.scss';

const images = [
  { src: '/assets/potato_placeholder.png', alt: 'Gallery image 1' },
  { src: '/assets/potato_placeholder.png', alt: 'Gallery image 2' },
  { src: '/assets/potato_placeholder.png', alt: 'Gallery image 3' },
];

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>  
        <h1 className={styles.galleryHeader}> Gallery </h1>
        <div className={styles.underline}></div>
        <div className={styles.gallery}>
        {images.map((image, index) => (
            <div className={styles.galleryItem} key={index}>
            <Image src={image.src} alt={image.alt} width={400} height={450} />
            </div>
        ))}
        </div>
    </div>
  );
};

export default Gallery;
