import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.overlay}></div>

            {/* Content Container */}
            <div className={styles.content}>



                {/* Text Content */}
                <span className={styles.badge}>Est. 2023 &bull; Bolton</span>

                <h1 className={styles.title}>
                    Branch Bros <br />
                    <span className={styles.highlight}>Tree Services</span>
                </h1>

                <p className={styles.subtitle}>
                    Branch Bros delivers precision tree surgery with a commitment to safety and aesthetics.
                    Transforming landscapes across Bolton and the surrounding areas.
                </p>

                {/* CTA Buttons */}
                <div className={styles.actions}>
                    <a href="#contact" className={styles.primaryBtn}>
                        Request Quote <ArrowRight size={20} style={{ marginLeft: '12px' }} />
                    </a>
                    <a href="#services" className={styles.secondaryBtn}>
                        Discover Services
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
