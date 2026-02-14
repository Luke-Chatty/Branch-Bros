import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h2 className={styles.heading}>Get in Touch</h2>
                        <p className={styles.subheading}>
                            Ready to transform your outdoor space? Contact us today for a free, no-obligation quote.
                        </p>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <div className={styles.iconWrapper}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>07901 234 567</p> {/* Placeholder, replace if real number known */}
                                </div>
                            </div>

                            <div className={styles.detailItem}>
                                <div className={styles.iconWrapper}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>info@branchbros.co.uk</p> {/* Placeholder */}
                                </div>
                            </div>

                            <div className={styles.detailItem}>
                                <div className={styles.iconWrapper}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3>Location</h3>
                                    <p>Bolton & Surrounding Areas</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.social}>
                            <h3>Follow Us</h3>
                            <a
                                href="https://www.facebook.com/p/Branch-Bros-Tree-Services-100094115890729/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <Facebook size={24} />
                                <span>Branch Bros Tree Services</span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <h3>Send us a message</h3>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={4} placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
