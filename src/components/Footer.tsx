import React from 'react';
import { Facebook, Mail, Phone, MapPin, TreePine } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <TreePine size={32} />
                            <span>Branch Bros</span>
                        </div>
                        <p className={styles.tagline}>
                            Precision tree surgery with a commitment to safety and aesthetics in Bolton & Bury.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4>Navigation</h4>
                        <a href="#">Home</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className={styles.contact}>
                        <h4>Contact</h4>
                        <div className={styles.contactItem}>
                            <Phone size={16} />
                            <span>07901 234 567</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Mail size={16} />
                            <span>info@branchbros.co.uk</span>
                        </div>
                        <div className={styles.contactItem}>
                            <MapPin size={16} />
                            <span>Bolton & Bury Area</span>
                        </div>
                    </div>

                    <div className={styles.social}>
                        <h4>Follow Us</h4>
                        <a
                            href="https://www.facebook.com/p/Branch-Bros-Tree-Services-100094115890729/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.fbLink}
                        >
                            <Facebook size={20} />
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Branch Bros Tree Services. All rights reserved.
                    </div>
                    <div className={styles.legal}>
                        <span>Fully Insured</span>
                        <span className={styles.dot}>&bull;</span>
                        <span>Free Estimates</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

