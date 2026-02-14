import React from 'react';
import { TreePine } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <TreePine size={24} />
                        <span>Branch Bros</span>
                    </div>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Branch Bros Tree Services. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
