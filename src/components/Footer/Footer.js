import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.container}>
            {/* Headline */}
            <h2 className={styles.headline}>
                React Redux Fundamentals
            </h2>
        </footer>
    )
}

export default Footer;
