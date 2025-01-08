import Image from 'next/image';
import styles from '../styles/gallery.module.scss';

const images = [
  { src: 'public/assets/dod-screenshot-1.png', alt: 'Gallery image 1' },
  { src: '/assets/dod-screenshot-2.png', alt: 'Gallery image 2' },
  { src: '/assets/dod-screenshot-3.png', alt: 'Gallery image 3' },
  { src: '/assets/dod-screenshot-4.png', alt: 'Gallery image 4' },
  { src: '/assets/dod-screenshot-5.png', alt: 'Gallery image 5' },
  { src: '/assets/dod-screenshot-5.png', alt: 'Gallery image 5' },
  { src: '/assets/dod-screenshot-5.png', alt: 'Gallery image 5' },
];

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.galleryHeader}> Gallery </h1>
          <div className={styles.underline}></div>
        </div>  
        <div className={styles.gallery}>
        {images.map((image, index) => (
            <div className={styles.galleryItem} key={index}>
            <Image src={image.src} alt={image.alt} layout="intrinsic" width={300} height={300} />
            </div>
        ))}
        </div>
    </div>
  );
};

export default Gallery;
