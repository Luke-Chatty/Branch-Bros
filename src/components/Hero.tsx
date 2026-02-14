import React from 'react';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    useScrollAnimation();

    return (
        <div className={styles.hero}>
            <div className={styles.overlay}></div>

            {/* Content Container */}
            <div className={`${styles.content} fade-up`}>
                {/* Text Content */}
                <span className={styles.badge}>Est. 2023 &bull; Bolton & Bury</span>

                <h1 className={styles.title}>
                    Elevating <br />
                    <span className={styles.highlight}>Tree Services</span>
                </h1>

                <p className={styles.subtitle}>
                    Premium tree surgery with a commitment to safety, aesthetics, and the local landscape.
                    Transforming Bolton with precision and passion.
                </p>

                {/* CTA Buttons */}
                <div className={styles.actions}>
                    <a href="#contact" className={styles.primaryBtn}>
                        Request Quote <ArrowRight size={20} style={{ marginLeft: '12px' }} />
                    </a>
                    <a href="#services" className={styles.secondaryBtn}>
                        Our Services
                    </a>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <MousePointer2 size={24} className={styles.mouseIcon} />
                <span>Scroll</span>
            </div>
        </div>
    );
};

export default Hero;
