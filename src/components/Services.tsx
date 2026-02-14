import React from 'react';
import { Axe, Scissors, ShieldCheck, Sprout } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        icon: <Scissors size={32} />,
        title: 'Pruning & Reshaping',
        description: 'Expert pruning to maintain tree health, shape, and safety. We ensure your trees look their best while promoting growth.'
    },
    {
        icon: <Axe size={32} />,
        title: 'Tree Felling & Removal',
        description: 'Safe and efficient removal of unwanted, dangerous, or diseased trees, regardless of size or location.'
    },
    {
        icon: <Sprout size={32} />,
        title: 'Stump Grinding',
        description: 'Complete removal of tree stumps to reclaim your garden space and prevent regrowth or pests.'
    },
    {
        icon: <ShieldCheck size={32} />,
        title: 'Hedge Trimming',
        description: 'Professional hedge cutting and maintenance to keep your boundaries neat, tidy, and manageable.'
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Our Services</h2>
                    <p className={styles.subheading}>Comprehensive tree care solutions for your home and business.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
