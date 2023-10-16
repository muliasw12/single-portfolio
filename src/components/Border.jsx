import React from 'react';
import styles from '../styles/Border.module.scss' ;

const Border = ({ footer, bottom }) => {
    if (footer) {
        return <div className={`${styles.border} ${styles['f-border']}`} />
    } else if (bottom) {
        return <div className={`${styles.border} ${styles['bottom-border']}`} />
    } else {
        return <div className={styles.border} />
    }
};

export default Border;