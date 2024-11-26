import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <h1 className={styles.footerHeader}> Saltbox Interactive </h1>
                {/* Icon/Logo here */}
                <div className={styles.socials}> Links/Icons here</div>
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
