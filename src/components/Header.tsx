import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useScrollAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={`container ${styles.container}`}>
                    {/* Logo Anchor */}
                    <div className={styles.logoWrapper}>
                        <img src="/logo-notext.png" alt="Branch Bros" className={styles.logo} />
                        <span className={styles.logoText}>Branch Bros</span>
                    </div>

                    {/* Mobile Brand */}
                    <a href="#" className={styles.mobileBrand}>
                        <img src="/logo-notext.png" alt="Branch Bros" />
                        <span>Branch Bros</span>
                    </a>

                    {/* Desktop Nav - Left */}
                    <nav className={styles.leftNav}>
                        <a href="#" className={styles.navLink}>Home</a>
                        <a href="#services" className={styles.navLink}>Services</a>
                    </nav>

                    {/* Desktop Nav - Right */}
                    <nav className={styles.rightNav}>
                        <a href="#contact" className={styles.navLink}>Contact</a>
                        <a href="#contact" className={styles.ctaBtn}>
                            <span>Get Quote</span>
                            <ChevronRight size={16} />
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Mobile Nav Overlay */}
                    <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ''}`}>
                        <a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
                        <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>

                        <div className={styles.mobileFooter}>
                            <p>Professional Tree Surgery Bolton</p>
                            <a href="tel:07901234567" className={styles.mobilePhone}>07901 234 567</a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Persistent Call Button - Outside header to fix fixed positioning */}
            <a href="tel:07901234567" className={styles.mobileCallBtn}>
                <Phone size={20} />
                <span>Call Now</span>
            </a>
        </>
    );
};

export default Header;

