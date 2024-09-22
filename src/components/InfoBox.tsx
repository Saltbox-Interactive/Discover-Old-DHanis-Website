import React from 'react';
import Image from 'next/image';
import styles from './InfoBox.module.scss';

interface InfoBox {
  imageSrc: string;
  altText: string;
  name: string;
  role: string;
  text: string;
}

const InfoBox = ({ imageSrc, altText, name, role, text }: InfoBox) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={altText} width={200} height={200}/>
      </div>
      <div className={styles.textContainer}>
        <h1> {name} </h1>
        <h2> {role} </h2>
        <p> {text} </p>
      </div>
    </div>
  );
};

export default InfoBox;
