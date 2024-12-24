import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                {/* <h1 className={styles.footerHeader}> Saltbox Interactive </h1> */}
                <div className={styles.companyIcon}></div>
                {/* Icon/Logo here */}
               
                <div className={styles.socials}> 
                    <h3>Learn more about our project</h3>
                    <div className={styles.icons}>
                        <Image 
                        src='/assets/steam.svg'
                        alt='Steam logo' 
                        width={50}
                        height={50}
                        />
                        <Image 
                        src='/assets/youtube.svg'
                        alt='YouTube logo' 
                        width={50}
                        height={50}
                        />
                        <Image 
                        src='/assets/tiktok.svg'
                        alt='TikTok logo' 
                        width={50}
                        height={50}
                        />
                        <Image 
                        src='/assets/linkedin.svg'
                        alt='LinkedIn logo' 
                        width={50}
                        height={50}
                        />
                    </div>
                </div>
                <div className={styles.columnFooter}>
                    <div className={styles.columnFooterText}>
                       <h3 className={styles.leftColumn}> Proudly made by Saltbox Interactive</h3>
                    </div>
                    <h3 className={styles.columnFooterText}> © Saltbox Interactive, 2024. All Rights Reserved.</h3>
                    <div className={styles.columnFooterText}>
                       <h3 className={styles.rightColumn}> Logo here</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
