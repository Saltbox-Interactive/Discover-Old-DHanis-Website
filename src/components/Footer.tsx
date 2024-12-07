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
                    <h3>Check us out on </h3>
                    <div className={styles.icons}>
                        <Image 
                            src='/assets/Steam_icon_logo.svg.png'
                            alt='Gallery image 3' 
                            width={35}
                            height={35}
                        />
                        
                        {/* Add more socials/icons as nessecary */}
                    </div>
                </div>
                
                <div className={styles.columnFooter}>
                    <div className={styles.columnFooterText}>
                       <h3 className={styles.leftColumn}> Proudly made by SaltBox Interactive</h3>
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
