import Image from 'next/image';
import styles from '../components/Gallery/gallery.module.scss';

/*

  There are 2 things you have to do to get an image to show up in Production, will try to find a better solution but this works in the meantime.
  
  Steps to displaying an image:
    
    1. Upload images as normal in the public/assets folder

    2. Copy the following link and put the name of the file after in the src reference.
      - https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/ 
      - For example, if the file was named "test.png", the full file reference would be: 
        - https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/test.png

*/

const images = [
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-1.png', alt: 'Gallery image 1' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-2.png', alt: 'Gallery image 2' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-3.png', alt: 'Gallery image 3' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-4.png', alt: 'Gallery image 4' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-5.png', alt: 'Gallery image 5' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-6.png', alt: 'Gallery image 6' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-7.png', alt: 'Gallery image 7' },
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
