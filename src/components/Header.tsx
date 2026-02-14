import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logoWrapper}>
                    <img src="/logo.png" alt="Branch Bros" className={styles.logo} />
                </div>

                {/* Desktop Nav - Left */}
                <nav className={styles.leftNav}>
                    <a href="#" className={styles.navLink}>Home</a>
                    <a href="#services" className={styles.navLink}>Services</a>
                </nav>

                {/* Desktop Nav - Right */}
                <nav className={styles.rightNav}>
                    <a href="#contact" className={styles.navLink}>Contact</a>
                    <a href="#contact" className={`btn ${styles.ctaBtn}`}>
                        <Phone size={16} style={{ marginRight: '8px' }} />
                        07901 234 567
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav */}
                <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ''}`}>
                    <a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                </div>

                {/* Mobile Persistent Call Button */}
                <a href="tel:07901234567" className={styles.mobileCallBtn}>
                    <Phone size={20} style={{ marginRight: '10px' }} />
                    Call Now
                </a>
            </div>
        </header>
    );
};

export default Header;
