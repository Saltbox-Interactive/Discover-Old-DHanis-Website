import Image from 'next/image';
import styles from '../components/Gallery/gallery.module.scss';

const images = [
  { src: '/assets/dod-screenshot-1.png', alt: 'Gallery image 1' },
  { src: '/assets/dod-screenshot-2.png', alt: 'Gallery image 2' },
  { src: '/assets/dod-screenshot-3.png', alt: 'Gallery image 3' },
  { src: '/assets/dod-screenshot-4.png', alt: 'Gallery image 4' },
  { src: '/assets/dod-screenshot-5.png', alt: 'Gallery image 5' },
  { src: '/assets/dod-screenshot-6.png', alt: 'Gallery image 6' },
  { src: '/assets/dod-screenshot-7.png', alt: 'Gallery image 7' },
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
            <Image 
              // IMPORTANT: If you plan on using .png, make sure you use the unoptimzied tag in the Image object, example below!  
              unoptimized
              src={image.src} 
              alt={image.alt} 
              layout="intrinsic"
              width={300} 
              height={300} />
            </div>
        ))}
        </div>
    </div>
  );
};

export default Gallery;
