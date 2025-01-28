import React from 'react';
import Image from 'next/image';
import styles from '../styles/InfoBox.module.scss';

interface InfoBox {
  imageSrc?: string;
  altText: string;
  name: string;
  role: string;
  text: string;
}

const InfoBox = ({ imageSrc=null, altText, name, role, text }: InfoBox) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={altText} width={350} height={350}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}> {name} </h1>
        <h2 className={styles.role}> {role} </h2>
        <p className={styles.description}> {text} </p>
      </div>
    </div>
  );
};

export default InfoBox;
