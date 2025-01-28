import React from 'react';
import styles from './Footer.module.scss'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer id="contact">
            <div className={styles.footerContainer}>
            <div className={styles.companyIcon}>
            <Image 
                src="/assets/saltbox-logo.svg"
                alt="Company Logo"
                width={240}
                height={240}
                objectFit="cover"
            />
            </div>
                <div className={styles.socials}> 
                    <h3>Learn more about our project</h3>
                    <div className={styles.icons}>
                        <a href="https://store.steampowered.com/app/3140860/Discover_Old_DHanis/" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src='/assets/steam.svg'
                                alt='Steam logo' 
                                width={50}
                                height={50}
                            />
                        </a>
                        <a href="https://www.youtube.com/@discoverolddhanis" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src='/assets/youtube.svg'
                                alt='YouTube logo' 
                                width={50}
                                height={50}
                            />
                        </a>
                        <a href="https://www.tiktok.com/@discoverolddhanis" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src='/assets/tiktok.svg'
                                alt='TikTok logo' 
                                width={50}
                                height={50}
                            />
                        </a>
                        <a href="https://www.linkedin.com/company/saltbox-interactive/" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src='/assets/linkedin.svg'
                                alt='LinkedIn logo' 
                                width={50}
                                height={50}
                            />
                        </a>
                    </div>
                    <div className={styles.emailSection}>
                        <h3>Email us at <a href="mailto:discoverolddhanis@gmail.com">discoverolddhanis@gmail.com</a></h3>
                     </div>
                </div>
                <div className={styles.columnFooter}>
                    <div className={styles.columnFooterText}>
                       <h3 className={styles.leftColumn}> Proudly made by Saltbox Interactive</h3>
                    </div>
                    <h3 className={styles.columnFooterText}> © Saltbox Interactive, 2025. All Rights Reserved.</h3>
                    <div className={styles.columnFooterText}>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
