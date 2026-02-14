import React from 'react';
import { Phone, Mail, MapPin, Facebook, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    useScrollAnimation();

    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={`${styles.info} fade-up`}>
                        <span className={styles.badge}>Contact Us</span>
                        <h2 className={styles.heading}>Ready to Start?</h2>
                        <p className={styles.subheading}>
                            Whether it's a small prune or a large removal, our team is ready to help.
                            Contact us for a free, professional consultation.
                        </p>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <div className={styles.iconWrapper}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>07901 234 567</p>
                                </div>
                            </div>

                            <div className={styles.detailItem}>
                                <div className={styles.iconWrapper}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>info@branchbros.co.uk</p>
                                </div>
                            </div>

                            <div className={styles.detailItem}>
                                <div className={styles.iconWrapper}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3>Service Area</h3>
                                    <p>Bolton, Bury & Surrounding Areas</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.social}>
                            <h3>Connect With Us</h3>
                            <a
                                href="https://www.facebook.com/p/Branch-Bros-Tree-Services-100094115890729/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <Facebook size={24} />
                                <span>Facebook Page</span>
                            </a>
                        </div>
                    </div>

                    <div className={`${styles.formWrapper} fade-up`} style={{ transitionDelay: '0.2s' }}>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formHeader}>
                                <h3>Send a Message</h3>
                                <p>We'll get back to you within 24 hours.</p>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" placeholder="07123 456789" required />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="service">Service Needed</label>
                                <select id="service" className={styles.select}>
                                    <option value="">Select a service...</option>
                                    <option value="pruning">Pruning & Reshaping</option>
                                    <option value="removal">Tree removal</option>
                                    <option value="stump">Stump Grinding</option>
                                    <option value="hedge">Hedge Trimming</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">How can we help?</label>
                                <textarea id="message" rows={4} placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                <span>Submit Request</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

