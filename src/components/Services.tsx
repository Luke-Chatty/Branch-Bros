import React from 'react';
import { Axe, Scissors, ShieldCheck, Sprout, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Services.module.css';

const services = [
    {
        id: 'pruning',
        icon: <Scissors size={32} />,
        title: 'Pruning & Reshaping',
        description: 'Expert pruning to maintain tree health, shape, and safety. We ensure your trees look their best while promoting growth.',
        tag: 'Health'
    },
    {
        id: 'felling',
        icon: <Axe size={32} />,
        title: 'Tree Felling & Removal',
        description: 'Safe and efficient removal of unwanted, dangerous, or diseased trees, regardless of size or location.',
        tag: 'Safety'
    },
    {
        id: 'stump',
        icon: <Sprout size={32} />,
        title: 'Stump Grinding',
        description: 'Complete removal of tree stumps to reclaim your garden space and prevent regrowth or pests.',
        tag: 'Recovery'
    },
    {
        id: 'hedge',
        icon: <ShieldCheck size={32} />,
        title: 'Hedge Trimming',
        description: 'Professional hedge cutting and maintenance to keep your boundaries neat, tidy, and manageable.',
        tag: 'Aesthetic'
    }
];

const Services: React.FC = () => {
    useScrollAnimation();

    return (
        <section id="services" className={styles.services}>
            <div className="container">
                <div className={`${styles.header} fade-up`}>
                    <span className={styles.badge}>Our Expertise</span>
                    <h2 className={styles.heading}>Professional Tree Care</h2>
                    <p className={styles.subheading}>
                        Branch Bros delivers precision tree surgery with a commitment to safety and aesthetics.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`${styles.card} stagger-item`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.tag}>{service.tag}</div>
                                <div className={styles.iconWrapper}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <a href="#contact" className={styles.learnMore}>
                                    Get Quote <ChevronRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

