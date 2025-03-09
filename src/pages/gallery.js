import Image from 'next/image';
import styles from '../components/Gallery/gallery.module.scss';

/*

  There are 2 things you have to do to get an image to show up in Production, will try to find a better solution but this works in the meantime.
  
  Steps to displaying an image:
    
    1. Upload images as normal in the public/assets folder and push the changes so the remote repo is updated.

    2. Copy the following link and put the name of the file after in the src reference.
      - https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/ 
      - For example, if the file was named "test.png", the full file reference would be: 
        - https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/test.png

*/

const images = [
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-1.png', alt: 'Gallery image 1' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-9.png', alt: 'Gallery image 2' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-10.png', alt: 'Gallery image 3' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-11.png', alt: 'Gallery image 4' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-12.png', alt: 'Gallery image 5' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-13.png', alt: 'Gallery image 6' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-14.png', alt: 'Gallery image 7' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-15.png', alt: 'Gallery image 8' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-16.png', alt: 'Gallery image 9' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-17.png', alt: 'Gallery image 10' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-18.png', alt: 'Gallery image 11' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-19.png', alt: 'Gallery image 12' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-20.png', alt: 'Gallery image 13' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-21.png', alt: 'Gallery image 14' },
  { src: 'https://media.githubusercontent.com/media/Saltbox-Interactive/Discover-Old-DHanis-Website/refs/heads/main/public/assets/dod-screenshot-22.png', alt: 'Gallery image 15' }
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
              // It looks like these values for height and width scale the resolution. If you set these higher, resolution will be better and vice versa
              width={900} 
              height={900} />
            </div>
        ))}
        </div>
    </div>
  );
};

export default Gallery;
